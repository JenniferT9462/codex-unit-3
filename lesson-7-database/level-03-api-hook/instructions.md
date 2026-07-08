# API Hook

## Objective

Create a custom hook to handle REST API responses.

## Benefits

Understand how to use custom hooks to separate logic from rendering.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder. The template should render `Header`, `Main`, and `Footer` components.
2. In this level folder, rename `react-template` to `api-hook`.
3. Start the Vite server and open the React Debugger browser.
4. In the `src/components/` folder, let the `Header` component render the title `Custom Hook for REST API Responses`.
5. View the page to make sure it runs without errors.
6. Code the following tasks from scratch. Don't copy/paste.
7. In `src/components/`, view `Main.jsx`.
8. In the `main` tag, add a `form` tag, a number `input` with the `name` and `required` attributes, a `label` tag, and a submit `button`. This will get a `max` number from the user to determine how many items to get from the REST API.
9. View the page to make sure it runs without errors.
10. Use `useState([])` and destructuring to create `data` and `setData`. This will store the data from the REST API. The data will start as an empty array.
11. In the `form` tag, add the attribute `onSubmit={handleSubmit}`.
12. In the `Main` function and under the `return` statement, create the function `handleSubmit`.
13. In `handleSubmit`, accept the `event` object and prevent default form behavior. Add `const form = event.target;`.
14. Create the `data` object that includes the `max` value. Then use `URLSearchParams` to convert `data` to a `dataString`.
15. Fetch from `https://potterapi-fedeperin.vercel.app/en/books`. Use `?` to separate the url from the `dataString`. Parse the response and save the results with `setData`.
16. View the page to make sure it runs without errors. You should be able to submit a `max` number and receive data.
17. Below the `form`, add an `output` tag that renders `data.map(toDetails)`.
18. Outside and under the `Main` function, create the function `toDetails` that accepts an `item` and `index` as parameters.
19. Create a unique `key` from `index` and a value from `item`. Add `const details = <details key={key}></details>`.
20. In the `details` tag, let the `summary` be the name of the book. Under `summary`, add the `img` of the book. Under `img`, add the description of the book. Then return `details`.
21. View the page to make sure it runs without errors. You may need to use `debugger` to view `item` properties.
22. Create a custom hook. In the `src` folder, create the `hooks` folder. In it, create `useBooksApi.js` that exports a function called `useBooksApi`. In the `Main` component, move `useState` code and `handleSubmit` into `useBooksApi`. Let `useBooksApi` return `[data, handleSubmit]`.
23. In `Main`, use `useBooksApi` and destructure its items, `data` and `handleSubmit`.
24. View the page to make sure it runs without errors.
25. Place a `debugger` breakpoint at the beginning of `useBooksApi` and `handleSubmit`.
26. Use the `debugger` to watch the `data` variable change. Observe that API logic separate from rendering.
27. In the `main` tag, add a `p` tag that explains how to create a custom hook for API responses.
28. View the page to make sure it runs without errors.

## More Information

- The `fetch` function accepts the URL of an API and an options object. The options object can be omitted if the `GET` method and query parameters will be used.
- Query parameters are used to send data through the URL.
- The `data` object should have the keys and values expected by the API. Example: `const data = { max: form.elements.max.value }`
- `URLSearchParams` accepts a `data` object then returns a `dataString`.
- Use a `?` to separate the API URL and the `dataString` query parameters.
- The `response` from `fetch` should be parsed. Example: `const result = await response.json();`.
- A unique `key` can be created with the `index` and content. Example: `const key = index + item.name;`
- Custom hooks in React start with `use` and describe their purpose. Example: `useBooksApi`
- When a custom hook returns an array, the items can be destructured. Example: `const [myItem1, myItem2] = useMyHook();`
- [Harry Potter API documentation](https://vlaurencena.github.io/harry-potter-openapi-swagger-ui/#/Books)

## Usage Tips

- In `StrictMode`, components are automatically forced to quickly mount, unmount, then mount again.
- `useEffect` always calls its callback function when the component mounts.

## Hints

- `npm run dev` starts a Vite server. Remember to navigate to the project folder in the terminal and install the `node_modules` folder.
- Remember to import `useState` and `useEffect` from `react`.
- Remember to use `async` and `await` to get results from promises.
- Use curly braces to render a variable in HTML. Example: `<p>{content}</p>`
