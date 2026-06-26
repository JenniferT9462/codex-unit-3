# Section Components

## Objective

Create and use components for the header, main, and footer tags.

## Benefits

Converting sections into components can help you understand how to use React components.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder.
2. In this level folder, rename `react-template` to `react-sections`.
3. In the terminal, navigate to the `react-sections` folder.
4. Start the Vite server and open a web browser to the URL provided by Vite. You may need to install `node_modules`.
5. In the `src` folder, create a `components` folder.
6. In the `components` folder, create the files `Header.jsx`, `Main.jsx`, and `Footer.jsx`.
7. In `Header.jsx`, export a function called `Header` that returns a `header` tag.
8. In the `header` tag, add an `h1` title `React Sections`.
9. In `Main.jsx`, export a function called `Main` that returns a `main` tag.
10. In the `main` tag, add a `p` tag.
11. Let the `p` tag explain how to convert sections into React components. Use your own words. Don't copy/paste.
12. In `Footer.jsx`, export a function called `Footer` that returns a `footer` tag.
13. In the `footer` tag, add any content.
14. In `App.jsx`, import `Header`, `Main`, and `Footer`.
15. Let the `App` function return a React fragment.
16. In the React fragment, add the `Header`, `Main`, and `Footer` components.
17. View the page in the browser.
18. In `App.css` or `index.css`, add at least 2 styles to improve the website's layout and appearance.
19. View the page in the browser.

## More Information

- Any set of HTML tags can be turned into a React component.
- React components can be stored in the `src/components/` folder.
- React components can only return 1 HTML tag, but that tag can contain multiple tags.
- React fragments can contain multiple tags that appear adjacent (next to each other) in the DOM.

## Usage Tips

- Importing a React component is the same as importing a function. Example: `import MyComponent from "./MyComponent.jsx";`
- To use a React component, make it look like an HTML tag. Example: `<MyComponent />` or `<MyComponent> </MyComponent>`
- React fragments are represented by empty tags. Example: `<> </>`
- React fragments can contain HTML tags and components. Example:

```jsx
<>
  <h1>My Title</h1>
  <MyComponent />
</>
```

## Hints

- `npm run dev` starts a Vite server.
- Make sure to install the `node_modules` folder.
- The names of React components usually begin with a capital letter.
- Files usually match the name of what they are exporting.
- React fragments are invisible HTML tags that don't appear in the DOM.
