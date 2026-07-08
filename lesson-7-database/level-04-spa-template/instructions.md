# SPA Template

## Objective

Create an SPA template with Tailwind, TW Elements, multiple pages, a form, and custom hooks.

## Benefits

An SPA template can speed up the development of complete multi-page websites.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder. The template should render `Header`, `Main`, and `Footer` components directly in the `body` tag.
2. In this level folder, rename `react-template` to `spa-template`.
3. In the terminal, navigate to the `spa-template` folder.
4. Start the Vite server and open a web browser to the URL provided by Vite.
5. In the `src/components/` folder, let the `Header` component render the title `React SPA Template`.
6. Move `Main` to the `/src/pages/` folder, convert `Main` to the `Home` page, then update `App.jsx` with the conversion.
7. View the page to make sure it runs without errors.
8. Add Tailwind and TW Elements to the template. Install (or add) the necessary packages - `tailwindcss@3`, `postcss`, `autoprefixer`, and `tw-elements`. Initialize Tailwind and PostCSS - `npx tailwindcss init --postcss`. In `tailwind.config.js`, add the necessary items to the `content` and `plugins` array, and add `darkMode`. In `style.css`, connect Tailwind and TW Elements. In `index.html`, link `style.css`.
9. View the page to make sure it runs without errors.
10. In the `components` folder, use TW Elements to create a `Navbar` component in `Navbar.jsx`, then add `Navbar` to the `Header` component. In the `src/hooks/` folder, create the `useCollapseTWE` hook, then use it in the `Navbar` component. Replace `a` tags with `NavLink` tags.
11. View the page to make sure it runs without errors and that the navbar collapse works. The server may need to be restarted to fix visual glitches.
12. Add multi-page routing to the template. Install `react-router`. In `App.jsx`, replace the empty tags with `BrowserRouter`, add `Routes`, add a `Route` for the `Home` page, let `Header` render at the top of each page, and let `Footer` render at the bottom of each page.
13. View the page to make sure it runs without errors.
14. In `src/pages/`, add `ApiKey.jsx` and create the `ApiKey` component that gets an API key from the user. Use a custom hook like `useSecret` that separates logic from rendering. Let the custom hook store and restore the API key with `sessionStorage`.
15. View the page to make sure it runs without errors.
16. In the `ApiKey` component, use TW Elements for the form input and `submit` button. Create the custom hook `useInputTWE` to separate logic from rendering.
17. View the page to make sure it runs without errors. The input should have an animation.
18. In `BrowserRouter`, add a `Route` for `ApiKey` and link to it from the `Navbar`. Remove unused links from the `Navbar`.
19. View the page to make sure it runs without errors. You should be able to switch back and forth between pages.
20. In the `Home` component, add a `p` tag with a message that explains how to make an SPA template.
21. View the page to make sure it runs without errors.
22. Copy the `spa-template` folder to a location that's easier to access for creating new React projects. In the copied folder, do not include the `node_modules` folder nor any lock files like `pnpm-lock.yaml`.

## More Information

- SPA stands for Single Page Application. Websites made with React are SPAs because they load only 1 HTML file. The "pages" are just JavaScript changing the DOM.
- By default, React doesn't render `header`, `main`, and `footer` in the `body` tag.
- To render components directly in the `body` tag, move `id="root"` to the `body` tag.
- React components that render web pages can go in the `src/pages/` folder.
- Other components can go in the `src/components/` folder.
- Custom hooks can go in the `src/hooks/` folder.
- Filenames usually match the functions they export.
- The `NavLink` component uses `to` instead of `href`.
- [TW Elements navbar](https://tw-elements.com/docs/standard/navigation/navbar/#section-nav)

## Usage Tips

- When installing new packages, remember to navigate to the project folder in the terminal.
- If packages are installed in the wrong folder, React may detect them, but they may not work properly.
- A `body` tag that follows semantic HTML rules can only contain these tags - `header`, `main`, and `footer`.
- A `script` tag should have the `defer` attribute if it is in the `head` tag and depends on the presence of certain HTML elements.
- A `BrowserRouter` component can be used to group adjacent top-level components together. Example:

```jsx
<BrowserRouter>
  <Header />
  <Main />
  <Footer />
</BrowserRouter>
```

## Hints

- `npm run dev` starts a Vite server. Make sure to install the `node_modules` folder first.
- Some NPM packages may not be compatible with the `body` tag as the React root.
- For templates, do not include `node_modules` and lock files, like `package-lock.json` or `pnpm-lock.yaml`. Those can be automatically re-generated when the template is copied to a new project.
