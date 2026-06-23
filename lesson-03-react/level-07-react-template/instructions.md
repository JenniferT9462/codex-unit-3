# React Template

## Objective

Create a custom React template for new projects.

## Benefits

Although Vite can scaffold a React project, you can apply customizations that fit your web development style.

## Complete these tasks

1. In a VS Code terminal, navigate to this level folder.
2. Use `npm create` to scaffold a `vite` project.
3. Name the project `react-template`.
4. Let it be a `React` and `JavaScript` project.
5. Let it automatically install dependencies.
6. Open a web browser to the URL provided by Vite.
7. In the VS Code file list, view `App.jsx` in the `react-template/src/` folder.
8. Delete all code in the `App` function such that it's an empty function. Observe that the web browser displays a blank page.
9. Let the `App` function return a `main` tag.
10. In the `main` tag, add an `h1` tag and a `p` tag.
11. Let the `h1` title be `React Template`.
12. Let the `p` tag display a message that explains how to create a React template. Use your own words. Do not copy/paste.
13. View the message in the browser.
14. Open `App.css` and delete all its content. Observe there are minimal changes in the browser.
15. In `App.css`, style the `h1` or `p` tag. Observe changes in the browser.
16. Open `index.css` and delete all its content. Observe noticable changes in the browser.
17. In `index.css`, add at least 2 styles. Observe changes in the browser.

## More Information

- Although Vite can scaffold a React project, it contains a lot of code you won't use.
- A custom template lets you start new projects with minimal code that you usually use.
- `App.css` should contain styles specific to a particular page.
- `index.css` should contain styles to be applied to all pages.

## Usage Tips

- Use `npm create` and a project type to scaffold a project. Example: `npm create some-type`
- To stop the Vite server, in the terminal, type q then press ENTER.
- To manually start a Vite server, in the terminal, navigate to the project folder, then run the `dev` script. Example: `npm run dev`

## Hints

- The `node_modules` folder can safely be deleted for templates that have been finalized.
- In `react-template/src/` path notation, folders end with `/`, `react-template` is the parent folder, and `src` is the child folder.
