import fs from 'fs'
import fsp from 'fs/promises'
import path from 'path'
import { pathToFileURL } from 'url'
import { promisify } from 'util'
import { execFile as _execFile } from 'child_process'

const execFile = promisify(_execFile)

export function lessonDir(slug: string) {
  return path.resolve(process.cwd(), slug)
}

export function exists(p: string) {
  return fs.existsSync(p)
}

export async function importDefault(p: string) {
  const url = pathToFileURL(p).href
  const mod = await import(url)
  return mod.default
}

export async function runNode(args: string[], opts?: { cwd?: string; timeoutMs?: number }) {
  const cwd = opts?.cwd
  const timeout = opts?.timeoutMs ?? 20000
  const result = await execFile('node', args, { cwd, timeout, maxBuffer: 10 * 1024 * 1024 })
  return { stdout: String(result.stdout ?? ''), stderr: String(result.stderr ?? '') }
}

export async function withTempDir(fn: (tmpDir: string) => Promise<void>) {
  const tmp = await fsp.mkdtemp(path.join(process.cwd(), 'tmp-'))
  try {
    await fn(tmp)
  } finally {
    // best-effort cleanup
    try {
      await fsp.rm(tmp, { recursive: true, force: true })
    } catch (_) {
      // ignore
    }
  }
}

export function readSource(p: string) {
  return fs.readFileSync(p, 'utf8')
}

export function stripComments(src: string) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '')
}

export function hasLocalStorageSetItem(src: string) {
  const stripped = stripComments(src)
  const re = /localStorage\.setItem\s*\(\s*([^,]+)\s*,\s*([^)]+)\)/g
  const matches = [] as string[]
  for (const m of stripped.matchAll(re)) {
    matches.push(m[0])
  }
  return { found: matches.length > 0, matches }
}

export function findsDocumentQuerySelectors(src: string) {
  const stripped = stripComments(src)
  const re = /document\.querySelector\s*\(\s*(['`\"])([^'"`]+)\1\s*\)/g
  const calls: Array<{ raw: string; selector?: string }> = []
  for (const m of stripped.matchAll(re)) {
    calls.push({ raw: m[0], selector: m[2] })
  }
  return { calls }
}

export function selectorTargetsP(selector?: string) {
  if (!selector) return false
  const tokens = selector.split(/\s*[>+~]\s*|\s+/).map(t => t.trim()).filter(Boolean)
  return tokens.some(t => t.startsWith('p') || /(^|[^a-zA-Z0-9_-])p($|[^a-zA-Z0-9_-])/.test(t))
}

export function hasTryCatch(src: string) {
  return /try\s*\{[\s\S]*?\}\s*catch\s*\(.*?\)\s*\{[\s\S]*?\}/.test(src)
}

export function catchIdentifier(src: string) {
  const m = /catch\s*\(\s*([_$A-Za-z][_$A-Za-z0-9]*)\s*\)/.exec(src)
  return m ? m[1] : null
}

export function consoleLogInCatchMessage(src: string) {
  const stripped = stripComments(src)
  // find catch blocks
  const catchRe = /catch\s*\(\s*([_$A-Za-z][_$A-Za-z0-9]*)\s*\)\s*\{([\s\S]*?)\}/g
  for (const m of stripped.matchAll(catchRe)) {
    const body = m[2]
    const logRe = /console\.log\s*\(\s*(['`\"])([\s\S]*?)\1\s*\)/g
    const lm = logRe.exec(body)
    if (lm) {
      return { found: true, literal: lm[2], usesErrorProp: false }
    }
    // check for console.log(error.message) or console.log(err.message)
    const errPropRe = /console\.log\s*\(\s*([_$A-Za-z][_$A-Za-z0-9]*)\.(message|stack)\s*\)/
    if (errPropRe.test(body)) {
      return { found: true, literal: undefined, usesErrorProp: true }
    }
    // check for console.log(error)
    const errRe = /console\.log\s*\(\s*([_$A-Za-z][_$A-Za-z0-9]*)\s*\)/
    if (errRe.test(body)) {
      return { found: true, literal: undefined, usesErrorProp: false }
    }
  }
  return { found: false }
}

// Finds all literal string arguments passed to console.log in the source.
export function consoleLogMessages(src: string) {
  const stripped = stripComments(src)
  const logRe = /console\.log\s*\(\s*(['`\"])([\s\S]*?)\1\s*\)/g
  const literals: string[] = []
  for (const m of stripped.matchAll(logRe)) {
    literals.push(m[2])
  }
  return { found: literals.length > 0, literals }
}

export function hasDebuggerStatement(src: string) {
  const stripped = stripComments(src)
  return /\bdebugger\b/.test(stripped)
}

// High-level helper: inspects console.log literal messages and reports whether
// they mention debugging, an action, or the terminal.
export function consoleLogExplainsDebug(src: string) {
  const { found, literals } = consoleLogMessages(src)
  const lower = literals.map(l => l.toLowerCase())
  const mentionsDebug = lower.some(l => l.includes('debug') || l.includes('debugger'))
  const mentionsAction = lower.some(l => l.includes('open') || l.includes('start') || l.includes('use') || l.includes('launch'))
  const mentionsTerminal = lower.some(l => l.includes('terminal') || l.includes('javascript debug terminal'))
  return { found, literals, mentionsDebug, mentionsAction, mentionsTerminal }
}

// Convenience helpers used across lesson tests.
export function readStrippedSource(p: string) {
  // Read a source file and strip comments in one call.
  return stripComments(readSource(p))
}

// Parse all array literal expressions in source and return arrays of element strings.
export function parseArrayLiterals(src: string) {
  const stripped = stripComments(src)
  const arrRe = /(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=\s*\[([\s\S]*?)\]/g
  const matches = Array.from(stripped.matchAll(arrRe))
  return matches.map((m) => splitArrayElements(m[1] || ""))
}

// Split the comma-separated contents of an array literal into element strings.
export function splitArrayElements(raw: string) {
  if (!raw) return []
  return raw
    .split(/,(?=(?:[^\"']*[\"'][^\"']*[\"'])*[^\"']*$)/)
    .map((s) => s.trim().replace(/^['"]|['"]$/g, ""))
    .filter(Boolean)
}

// Find the body of a top-level function (declaration or const/let/var = () => {}) by name.
// Returns the body string or empty string when not found.
// This implementation scans the source to find the matching brace while
// correctly skipping over strings and template literals so that inner
// `}` characters inside `${...}` expressions do not prematurely end the match.
export function findFunctionBody(src: string, name: string) {
  const stripped = stripComments(src)

  // Try to find the function declaration or function expression start
  const declRe = new RegExp(`function\\s+${name}\\s*\\([^)]*\\)`, 'm')
  const exprRe = new RegExp(`(?:const|let|var)\\s+${name}\\s*=\\s*(?:async\\s*)?\\([^)]*\\)\\s*=>`, 'm')

  let match = declRe.exec(stripped)
  if (!match) match = exprRe.exec(stripped)
  if (!match) return ''

  // Find the first '{' after the match index
  let startIdx = stripped.indexOf('{', match.index + match[0].length)
  if (startIdx === -1) return ''

  // Scan forward to find the matching closing '}' balancing braces,
  // while skipping over string literals and template literals.
  let i = startIdx
  let depth = 0
  const len = stripped.length

  while (i < len) {
    const ch = stripped[i]

    // Enter single-quoted string
    if (ch === "'") {
      i++
      while (i < len) {
        if (stripped[i] === "'" && stripped[i - 1] !== "\\") { i++; break }
        if (stripped[i] === '\\') i += 2
        else i++
      }
      continue
    }

    // Enter double-quoted string
    if (ch === '"') {
      i++
      while (i < len) {
        if (stripped[i] === '"' && stripped[i - 1] !== "\\") { i++; break }
        if (stripped[i] === '\\') i += 2
        else i++
      }
      continue
    }

    // Enter template literal: needs special handling for ${...} expressions
    if (ch === '`') {
      i++
      while (i < len) {
        if (stripped[i] === '`' && stripped[i - 1] !== "\\") { i++; break }
        // Handle escaped chars inside template
        if (stripped[i] === '\\') { i += 2; continue }
        // Handle ${ ... } expression inside template by scanning until its matching brace
        if (stripped[i] === '$' && stripped[i + 1] === '{') {
          i += 2 // skip '${'
          let nested = 1
          while (i < len && nested > 0) {
            const c = stripped[i]
            if (c === "'") {
              i++
              while (i < len) {
                if (stripped[i] === "'" && stripped[i - 1] !== "\\") { i++; break }
                if (stripped[i] === '\\') i += 2
                else i++
              }
              continue
            }
            if (c === '"') {
              i++
              while (i < len) {
                if (stripped[i] === '"' && stripped[i - 1] !== "\\") { i++; break }
                if (stripped[i] === '\\') i += 2
                else i++
              }
              continue
            }
            if (c === '`') {
              // nested template - reuse outer template handling
              i++
              while (i < len) {
                if (stripped[i] === '`' && stripped[i - 1] !== "\\") { i++; break }
                if (stripped[i] === '\\') i += 2
                else i++
              }
              continue
            }
            if (c === '{') { nested++ }
            else if (c === '}') { nested-- }
            else if (c === '\\') { i += 2; continue }
            i++
          }
          continue
        }
        i++
      }
      continue
    }

    // Count braces for block depth
    if (ch === '{') {
      depth++
    } else if (ch === '}') {
      depth--
      if (depth === 0) {
        // return the body between the outermost braces (excluding them)
        return stripped.slice(startIdx + 1, i)
      }
    }

    i++
  }

  return ''
}

// Return the first line that starts with the given 1-based number, or undefined.
export function findLineStartingWithNumber(lines: string[], num: number) {
  const re = new RegExp(`^${num}\\b`)
  return lines.find((l) => re.test(l))
}

// Check whether the provided lines contain numbered output for every item in `items`.
// For each item at index i, there must be a line that starts with the 1-based index
// and also includes the item's literal text. Returns true when all items are matched.
export function numberedItemsPresent(lines: string[], items: string[]) {
  for (let i = 0; i < items.length; i++) {
    const num = i + 1
    const item = items[i]
    if (!item) return false
    const found = lines.some((line) => {
      const startsWith = new RegExp(`^${num}\\b`).test(line)
      return startsWith && line.includes(item)
    })
    if (!found) return false
  }
  return true
}

export async function runNodeLines(args: string[], opts?: { cwd?: string; timeoutMs?: number }) {
  // Run node and return trimmed, non-empty stdout lines.
  const { stdout } = await runNode(args, opts)
  return String(stdout).split(/\r?\n/).map(l => l.trim()).filter(Boolean)
}
