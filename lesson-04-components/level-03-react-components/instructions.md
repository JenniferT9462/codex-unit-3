# React Components

## Objective

Create React components that render different page sections.

## Benefits

React components group code into reusable visible pieces of the website.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder.
2. In this level folder, rename `react-template` to `react-components`.
3. In the terminal, navigate to the `react-components` folder.
4. Start the Vite server and open a web browser to the URL provided by Vite. You may need to install `node_modules`.
5. In the `src` folder, create a `components` folder.
6. In the `components` folder, create the files `Title.jsx`, and `Info.jsx`.
7. In `Title.jsx`, export a function called `Title` that returns an `h1` tag.
8. In the `h1` tag, put `React Components`.
9. In `Info.jsx`, export a function called `Info` that returns a `p` tag.
10. Let the `p` tag explain what React components are and how to use them. Use your own words. Don't copy/paste.
11. In `App.jsx`, import `Title` from `Title.jsx` and `Info` from `Info.jsx`.
12. Let the `App` function return a `main` tag.
13. In the `main` tag, add the `Title` and `Info` components.
14. View the page in the browser.
15. In `App.css` or `index.css`, add at least 2 styles to improve the website's layout and appearance.
16. View the page in the browser.

## More Information

- React components group code into reusable visible pieces of the website.
- The names of React components usually begin with a capital letter.
- Files usually match the name of what they are exporting.

## Usage Tips

- Importing a React component is the same as importing a function. Example: `import MyComponent from "./MyComponent.jsx";`
- To use a React component, make it look like an HTML tag. Example: `<MyComponent />` or `<MyComponent> </MyComponent>`

## Hints

- `npm run dev` starts a Vite server.
- Make sure to install the `node_modules` folder.
