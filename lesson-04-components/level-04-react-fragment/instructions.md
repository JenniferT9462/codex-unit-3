# React Fragment

## Objective

Use React fragments to render multiple adjacent tags in the DOM.

## Benefits

React fragments are useful when you don't want extra tags (like `div` or `span`) to group HTML tags or React components together.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder.
2. In this level folder, rename `react-template` to `react-fragment`.
3. In the terminal, navigate to the `react-fragment` folder.
4. Start the Vite server and open a web browser to the URL provided by Vite. You may need to install `node_modules`.
5. In `App.jsx`, let the `App` function return adjacent tags `header`, `main`, and `footer` next to each other. There should be an error.
6. Contain the tags in a React fragment. The error should be gone.
7. In the `header` tag, add an `h1` title `React Fragment`.
8. In the `main` tag, add a `p` tag that explains React fragments. Use your own words. Don't copy/paste.
9. In the `footer` tag, add any content.
10. View the page in the browser.
11. In `App.css` or `index.css`, add at least 2 styles to improve the website's layout and appearance.
12. View the page in the browser.

## More Information

- React components can only return 1 HTML tag, but that tag can contain multiple tags.
- React fragments are invisible HTML tags that don't appear in the DOM.
- React fragments can contain multiple tags that appear adjacent (next to each other) in the DOM.

## Usage Tips

- Importing a React component is the same as importing a function. Example: `import MyComponent from "./MyComponent.jsx";`
- To use a React component, make it look like an HTML tag. Example: `<MyComponent />` or `<MyComponent> </MyComponent>`
- React fragments are represented by empty tags. Example: `<> </>`
- React fragments can contain adjacent HTML tags. Example:

```jsx
<>
  <h1>My Title</h1>
  <p>My content.</p>
</>
```

## Hints

- `npm run dev` starts a Vite server.
- Make sure to install the `node_modules` folder.
- The names of React components usually begin with a capital letter.
- Files usually match the name of what they are exporting.
