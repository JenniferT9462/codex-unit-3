# API Input

## Objective

Receive data from an API based on user input, then render the results.

## Benefits

Data from an API is commonly based on user input, then converted to React elements.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `api-data` folder (from a previous level) into this level folder.
2. In this level folder, rename `api-data` to `api-input`.
3. In the terminal, navigate to the `api-input` folder.
4. Run `pnpm install` in the terminal to ensure `node_modules` was properly copied or installed.
5. Start the Vite server and open the React Debugger browser.
6. Code the following tasks from scratch. Don't copy/paste.
7. In the `src/components/` folder, let the `Header` component render the title `Change API Data with User Input`.
8. View the page to make sure it runs without errors.
9. In `src/components/`, view `Main.jsx`.
10. In the `toCharacters` function, add a second parameter - `index`.
11. In `toCharacters`, add `const key = index + dataItem.fullName`.
12. In the `details` tag, add the attribute `key={key}`.
13. View the page to make sure it runs without errors.
14. In the `main` tag, add a `form` tag, a number `input` with `name` attribute, a `label` tag, and a submit `button`. This will specify the `max` number of characters to fetch from the API.
15. In the `form` tag, add the attribute `onSubmit={handleSubmit}`.
16. In the `Main` function and under the `handleData` function, create the `handleSubmit` function.
17. View the page to make sure it runs without errors.
18. In `handleSubmit`, accept the `event` object and prevent default form behavior.
19. Add `const form = event.target;`.
20. Add `const data` and let it be the data object for the API.
21. Use `URLSearchParams` to create a `dataString`.
22. Fetch from `https://potterapi-fedeperin.vercel.app/en/characters` and include the `dataString` as query parameters.
23. Parse the API response into `results`, use `map` and `toCharacters`, save the element array in `details`, then use `setCharacters` to set `details` as the new value of `characters`.
24. View the page to make sure it runs without errors.
25. Place a `debugger` breakpoint at the beginning of `handleSubmit`.
26. Use the `debugger` to watch the variables change - `data`, `dataString`, `results`, and `details`.
27. The specified number of characters should be rendered on the page.
28. In the `main` tag, add a `p` tag that explains how to accept user input, include it in the API request, and how to render the results.
29. View the page to make sure it runs without errors.

## More Information

- The `fetch` function accepts the URL of an API and an options object. The options object can be omitted if the `GET` method and query parameters will be used.
- Query parameters are used to send data through the URL.
- The `data` object should have the keys and values expected by the API. Example: `const data = { max: form.elements.max.value}`
- `URLSearchParams` accepts a `data` object then returns a `dataString`.
- Use a `?` to separate the API URL and the `dataString` query parameters.
- [Harry Potter API documentation](https://vlaurencena.github.io/harry-potter-openapi-swagger-ui/#/Characters/get_characters)

## Usage Tips

- Because of the time it takes to receive data, the `Main` component renders API data into HTML tags sometime after the mount phase.
- In `StrictMode`, components are automatically forced to quickly mount, unmount, then mount again.
- `useEffect` always calls its callback function when the component mounts.

## Hints

- `npm run dev` starts a Vite server. Remember to navigate to the project folder in the terminal and install the `node_modules` folder.
- Remember to import `useState` and `useEffect` from `react`.
- Remember to use `async` and `await` to get results from promises.
- Use curly braces to render a variable in HTML. Example: `<p>{content}</p>`
- The debugger can be used to inspect values received from `form.elements`.
