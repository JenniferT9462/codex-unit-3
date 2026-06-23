# No NPX

## Objective

Learn when `npx` is required and not required.

## Benefits

Knowing when `npx` is required and not required can clarify inconsistencies between NPM scripts and terminal commands.

## Complete these tasks

1. In a VS Code terminal, navigate to this level folder.
2. Use `npm` initialize a new project.
3. Use `npm` to install `cowsay`. Source control will have many untracked files.
4. In the VS Code file list, select the folder for this level.
5. Add `.gitignore` with `node_modules`. Many untracked files should be removed from source control.
6. In `package.json`, add a `"scripts"` object if it's not already there.
7. In the `"scripts"` object, add a property called `"message1"`.
8. Let the value of `"message1"` be `"npx cowsay Is npx required?"`.
9. In the terminal, use `npm` to run the `message1` script.
10. In `package.json`, add `"message2"` with `"cowsay Is npx required?"`
11. In the terminal, use `npm` to run the `message2` script.
12. In the terminal, run the command `npx cowsay Is npx required?`.
13. In the terminal, run the command `cowsay Is npx required?`
14. In `script.js`, use `console.log` to display a message.
15. Let the message explain when `npx` is required and when `npx` is not required?
16. Run `script.js`.

## More Information

- `npx` can run packages in `scripts` or directly in the terminal.
- Separate each field and value pair with a comma. Example:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "author": "Frontend Developer"
}
```

## Usage Tips

- Use `npm run` to run an NPM script. Example: `npm run cowsay-shortcut`.
- `"scripts"` contain the names of shortcuts and their terminal commands. Example:

```json
{
  "scripts": {
    "cowsay-shortcut1": "npx cowsay Hello World!",
    "cowsay-shortcut2": "cowsay Hello Earth!"
  }
}
```

## Hints

- NPM scripts are useful for running long terminal commands.
- In NPM scripts, `npx` can be omitted.
