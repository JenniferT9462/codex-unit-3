import Slides from "./Slides.jsx";
export default function Main() {
    return (
      <main>
        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-blue-900 max-w-2xl mx-auto">
          <p className="font-semibold mb-1">
            How to render TW Elements components in React:
          </p>
          <p className="text-sm">
            To successfully render interactive TW Elements components, raw HTML
            syntax must first be converted into compliant JSX (transforming
            classes to <code>className</code>, converting inline styles into
            object literals, and changing kebab-case SVG attributes to
            camelCase). Because these interactive features rely on global
            JavaScript initializers, you must import <code>initTWE</code>{" "}
            alongside your specific component package, and invoke it safely
            inside a <code>useEffect</code> hook running on an empty dependency
            array to cleanly initialize behaviors during React's component mount
            phase.
          </p>
        </div>
        <Slides/>
      </main>
    );
}