# Custom Hook Return Values

## Objective

Accept parameters and return values with custom hooks, then use them.

## Benefits

Custom hooks can accept parameters and return values that are useful for React components.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder. The template should render `Header`, `Main`, and `Footer` components.
2. In this level folder, rename `react-template` to `hook-return`.
3. Start the Vite server and open the React Debugger browser.
4. In the `src/components/` folder, let the `Header` component render the title `Custom Hook Return Values`.
5. View the page to make sure it runs without errors.
6. Code the following tasks from scratch. Don't copy/paste.
7. In `src/components/`, view `Main.jsx`.
8. In the `main` tag, add a `form`, `label`, a password `input`, and a `button` to get a `secretValue` from the user. Add an `output` tag that renders the `secretValue`. In `handleSubmit`, save the `secretValue` with `useState`, and store the `secretValue` with `sessionStorage`.
9. View the page to make sure it runs without errors.
10. Use `useEffect` and `componentDidMount` during the mount phase to restore the `secretValue` from `sessionStorage`.
11. View the page to make sure it runs without errors. The `secretValue` should be displayed when the page is reloaded.
12. In the `src` folder, create the `hooks` folder, and the file `useSecret.js` that exports the function `useSecret`.
13. In `Main.jsx`, move the `useState` code, the `useEffect` code, `componentDidMount`, `handleSubmit`, and imports into `useSecret`.
14. In `useSecret`, on the line after `useState` and `useEffect`, add `return [secretValue, handleSubmit]`. An array is being used to return the secret value and the handler function.
15. In `Main`, add `useSecret();` and destructure the returned array items into `secretValue` and `handleSubmit`.
16. View the page to make sure it works properly and runs without errors.
17. Change the `name` (or `id`) value of the `input` tag. Use an arbitrary name that'll break the component. Example: `sssssecretValue`
18. View the page. It should not work properly, and it should show an error in the console.
19. Let `useSecret` take in the parameter `secretKey`. The `secretKey` parameter will match the `name` (or `id`) attribute of the `input` tag and the key used for `sessionStorage`
20. In `useSecret`, replace the key for `sessionStorage` with the `secretKey` variable.
21. In `handleSubmit`, let `value` be `form.elements[secretKey].value`. This is bracket notation that replaces properties with variables.
22. In `Main`, give `useSecret` the new `name` (or `id`).
23. View the page to make sure it runs without errors.
24. Once again, change the `name` (or `id`) attribute of the `input` tag, then give `useSecret` the new `name` (or `id`).
25. View the page to make sure it runs without errors.
26. Place a `debugger` breakpoint at the beginning of `useSecret`, `componentDidMount`, and `handleSubmit`.
27. Use the `debugger` in `Main` to watch `sessionStorage`, and watch the `secretValue` stateful variable change.
28. In the `main` tag, add a `p` tag that explains how give and receive values from custom hooks, and how to use bracket notation for objects.
29. View the page to make sure it runs without errors.

## More Information

- Custom hooks are JavaScript functions, so they can receive values as parameters and return values.
- When a function returns an array, its items can be destructured.
- Bracket notation allows variables to replace object properties. Example:

```javascript
const myProperty = "secretKey";
const value = form.elements[myProperty].value;
// This is equivalent to
// const value = form.elements.secretKey.value;
```

## Usage Tips

- `didMount` and `setDidMount` are only necessary if the component uses them.
- In `StrictMode`, components are automatically forced to quickly mount, unmount, then mount again.
- The `name` (or `id`) attribute adds the element to `form.elements`.
- The debugger can be used to inspect values in `form.elements`.
- `useEffect` always calls its callback function when the component mounts.

## Hints

- `npm run dev` starts a Vite server. Remember to navigate to the project folder in the terminal and install the `node_modules` folder.
- Remember to import `useState` and `useEffect` from `react`.
- Use curly braces to render a variable in HTML. Example: `<p>{content}</p>`
