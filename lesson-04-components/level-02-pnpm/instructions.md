# PNPM

## Objective

Learn about PNPM and how to use it.

## Benefits

When used to install packages, PNPM can save time and disk space.

## Complete these tasks

1. In your system's file explorer or file finder, copy your `react-template` folder into this level folder.
2. In this level folder, rename `react-template` to `react-pnpm`.
3. In the `react-pnpm` folder, delete the `node_modules` folder and the file `package-lock.json`
4. In the terminal, navigate to the `react-pnpm` folder.
5. Use `pnpm` to install the packages listed in `package.json`.
6. Compare the folder sizes of `react-template` and `react-pnpm`. Observe `react-template` takes up more disk space than `react-pnpm`.
7. In your system's file explorer or file finder, view the `react-template` folder.
8. In `react-template`, delete the `node_modules` folder and `package-lock.json`.
9. Copy `react-template` into this level folder. You may notice that copy is faster.
10. Rename `react-template` to `react-fast`.
11. In the terminal, navigate to the `react-fast` folder.
12. Use `pnpm` to install packages.
13. In `script.js`, use `console.log` to display a message.
14. Let the message explain how PNPM saves time and disk space.
15. Run `script.js`.

## More Information

- `npm` installs packages per project. Each project uses its own copy of each package. Packages are duplicate across projects.
- `pnpm` installs packages in a local central repository. Each package uses the central copy of each package. Packages are shared across projects.
- [PNPM website](https://pnpm.io/)
- [How to view folder sizes on Mac](https://www.youtube.com/watch?v=9SWjncQgk7k)
- [How to view folder sizes on Windows](https://www.youtube.com/watch?v=XoYogNl5FMk)

## Usage Tips

- Use `pnpm install` to install all the packages listed in `package.json`.
- Use `pnpm` instead of `npm` to install external packages.
- When you copy `react-template` as a scaffold, you will need to use `pnpm` to install packages.

## Hints

- Global packages can run without the `npx` command.
