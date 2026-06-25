# React Root

## Objective

Learn about the React root and how it works.

## Benefits

Discover how the React root transforms a minimal `index.html` file into a website.

## Complete these tasks

1. In your system's folder explorer or file picker, copy your `react-template` folder into this level folder.
2. In this level folder, rename `react-template` to `react-root`.
3. In the terminal, navigate to the `react-root` folder.
4. Start the Vite server and open a web browser to the URL provided by Vite. You may need to install `node_modules`.
5. In the `react-root/src/` folder, view `main.jsx`.
6. Observe the `createRoot` function that takes in an element `document.getElementById`.
7. Refactor it to save the element in the variable `divTag` first.
8. Pass `divTag` to `createRoot`.
9. Observe the `render` method is chained after `createRoot`.
10. Temporarily move `.render` to the line after `createRoot`.
11. Observe `createRoot` returns a Root object.
12. Save the Root object in a variable named `root`.
13. On the same line as `render`, chain render to `root`. Observe that `render` is a method of the `root` object.
14. Overwrite the value that is passed to `render` with a `main` tag.
15. In the `main` tag, add an `h1` and a `p` tag.
16. In the `h1` tag, add `React Root`.
17. In the `p` tag, add a message that explains React root. Use your own words. Don't copy/paste.
18. View the page in the browser.

## More Information

- React renders HTML into a root element.
- A root element from `index.html` is selected in `main.jsx` by `getElementById`.
- `createRoot` designates the root element in which HTML will be rendered.
- The Root object has a `render` method that renders HTML into the root element.
- [createRoot reference](https://react.dev/reference/react-dom/client/createRoot)

## Usage Tips

- `getElementById` accepts an ID then returns an element. Example: `const myElement = document.getElementById("myID");`
- `createRoot` accepts an element and returns a Root object. Example: `const root = createRoot(myElement);`
- The Root object has a `render` method that accepts HTML code. Example: `root.render(<h1>Hello World!</h1>)`

## Hints

- `npm run dev` starts a Vite server.
- Make sure to install the `node_modules` folder.
- If a function returns an object, properties (such as a method) can be chained to the return object without saving the object to a variable.
