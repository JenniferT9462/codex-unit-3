# Global Packages

## Objective

Learn about global packages and how to install them.

## Benefits

Global packages can be installed and accessed from any project.

## Complete these tasks

1. In the VS Code terminal, navigate to this level folder.
2. Use `npm` to list global packages. The list may be empty for you.
3. Use `npm` to install the package `pnpm` globally.
4. Use `npm` to list global packages. `pnpm` should be in the list.
5. Run the command `pnpm --version`. If a version number is displayed, then the package was installed successfully. Otherwise, you may need to restart your computer to complete the installation.
6. Create `script.js` in this level folder.
7. In `script.js`, use `console.log` to display a message.
8. Let the message explain how to install global packages.
9. Run `script.js`.

## More Information

- Global packages are installed such that they can be accessed from any project.
- `npx` can be ommitted when running global packages.
- `pnpm` is a package that can save time and disk space when installing other packages.
- [PNPM in NPMJS](https://www.npmjs.com/package/pnpm)

## Usage Tips

- Use `npm list --global` to list globally installed packages.
- Use `npm install --global` and a package name to install a package globally. Example: `npm install --global some-package`
- If you're getting errors installing with `npm`, try a familiar installation method listed [HERE](https://pnpm.io/installation#using-homebrew).

## Hints

- Instead of `--global`, the shortcut `-g` can be used.
- Instead of `npm install`, the shortcut `npm i` can be used.
