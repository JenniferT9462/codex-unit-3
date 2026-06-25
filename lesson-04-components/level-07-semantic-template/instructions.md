# Semantic Template

## Objective

Customize React to properly render semantic sections.

## Benefits

A website that follows semantic rules can be ranked better by search engines.

## Complete these tasks

1. In your system's folder explorer or file picker, copy your `react-template` folder into this level folder.
2. In this level folder, rename `react-template` to `semantic-template`.
3. In the terminal, navigate to the `semantic-template` folder.
4. Start the Vite server and open a web browser to the URL provided by Vite. You may need to install `node_modules`.
5. Inspect the DOM in the browser. Observe that the `body` tag doesn't follow semantic HTML rules.
6. In `index.html`, move `id="root"` to the `body` tag.
7. Delete the empty `div` tag.
8. Move the `script` tag to the `head` tag and add `defer`.
9. In the `App` component, render a `main` tag with some content.
10. View the page in the browser.
11. Inspect the DOM in the browser. Observe that the `body` tag now follows semantic HTML rules.
12. In the `src` folder, create the `components` folder.
13. In the `components` folder, create these components with proper semantic content - `Header`, `Main`, and `Footer`.
14. Update the `App` component to properly render only these components - `Header`, `Main`, and `Footer`. An empty tag will be required to group them together.
15. In the `Main` component, add a `p` tag with a message that explains how to make a semantic template.
16. View the page in the browser.
17. Inspect the DOM in the browser. Observe that the `body` tag has semantic sections.
18. Update your `react-template` to be a semantic template with `Header`, `Main`, and `Footer`.

## More Information

- By default, React doesn't render `header`, `main`, and `footer` in the `body` tag.
- React can be customized to follow semantic rules by selecting the `body` tag as the React root.
- Additional React components can go in the `src/components/` folder.
- Filenames usually match the functions they export.
- Because React components are functions, they can be imported exactly like functions.

## Usage Tips

- A `body` tag that follows semantic HTML rules can only contain these tags directly - `header`, `main`, and `footer`.
- A `script` tag should have the `defer` attribute if it is in the `head` tag and depends on the presence of certain HTML elements.
- A React fragment (or empty tag) can group adjacent elements or components together. Example:

```jsx
<>
  <Header />
  <Main />
  <Footer />
</>
```

## Hints

- `npm run dev` starts a Vite server.
- Make sure to install the `node_modules` folder.
- Some NPM packages may not be compatible with the `body` tag as the React root.
- For templates, delete `node_modules` and lock files, like `package-lock.json` or `pnpm-lock.yaml`. Those can be automatically generated when the template is copied to a new project.
