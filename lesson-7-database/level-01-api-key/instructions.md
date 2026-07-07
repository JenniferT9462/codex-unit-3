# API Input

## Objective

Receive data from an API based on user input, then render the results.

## Benefits

Data from an API is commonly based on user input, then converted to React elements.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder. The template should render `Header`, `Main`, and `Footer` components.
2. In this level folder, rename `react-template` to `api-key`.
3. Start the Vite server and open the React Debugger browser.
4. In the `src/components/` folder, let the `Header` component render the title `Save and restore an API key`.
5. View the page to make sure it runs without errors.
6. Code the following tasks from scratch. Don't copy/paste.
7. In `src/components/`, view `Main.jsx`.
8. In the `main` tag, add a `form` tag, a password `input` with the `name` attribute, a `label` tag, and a submit `button`. This will get an `apiKey` from the user.
9. Use `useState()` and array destructuring to create `apiKey` and `setApiKey`. This will store the API key from the user.
10. Under the `form` tags, add an `output` tag that renders `apiKey`.
11. View the page to make sure it runs without errors.
12. In the `Main` function and under the `return` statement, create the function `handleSubmit`.
13. In `handleSubmit`, accept the `event` object and prevent default form behavior.
14. Add `const form = event.target;`.
15. Add `const value` and let it be the API key that the user submitted.
16. Store `value` with `sessionStorage`.
17. Use `setApiKey` to save `value` in the state variable `apiKey`.
18. In the `form` tag, add the attribute `onSubmit={handleSubmit}`.
19. View the page to make sure it runs without errors.
20. Set up the component to track the mount phase. Use `useEffect`, the callback `componentDidMount`, and an empty array of dependencies.
21. In the function `componentDidMount`, get `apiKey` from `sessionStorage`.
22. Use `setApiKey` to save the restored API key in the stateful variable.
23. View the page to make sure it runs without errors.
24. Place a `debugger` breakpoint at the beginning of `Main`, `handleSubmit`, and `componentDidMount`.
25. Close the browser, then open a new React Debugger browser.
26. Use the `debugger` to watch the `apiKey` stateful variable change.
27. Enter a new API key, then use the `debugger` to watch the `apiKey` stateful variable change.
28. Refresh the browser, then use the `debugger` to watch the `apiKey` stateful variable change.
29. In the `main` tag, add a `p` tag that explains how to save an API key with a handler function and restore the API when the component mounts.
30. View the page to make sure it runs without errors.

## More Information

- The `name` attribute adds the element to `form.elements`.
- The debugger can be used to inspect values in `form.elements`.
- `sessionStorage` stores information in the browser temporarily. The information is cleared when the browser is closed.
- The `setItem` method takes a key and value. Example: `sessionStorage.setItem("myName", "Bob");`
- The `getItem` method takes a key and returns its value. Example: `const firstName = sessionStorage.getItem("myName");`
- The `onSubmit` attribute assigns an event handler function to a `form` tag.

## Usage Tips

- `didMount` and `setDidMount` are only necessary if the component uses them.
- In `StrictMode`, components are automatically forced to quickly mount, unmount, then mount again.
- `useEffect` always calls its callback function when the component mounts.

## Hints

- `npm run dev` starts a Vite server. Remember to navigate to the project folder in the terminal and install the `node_modules` folder.
- Remember to import `useState` and `useEffect` from `react`.
- Use curly braces to render a variable in HTML. Example: `<p>{content}</p>`
