# API Data

## Objective

Receive data from an API, then use the `map` method and a callback function to transform it to a stateful array of React elements.

## Benefits

Data is commonly received from an API, then converted to React elements with the `map` method.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder. The template should render `Header`, `Main`, and `Footer` components.
2. In this level folder, rename `react-template` to `api-data`.
3. Start the Vite server and open the React Debugger browser.
4. In the `src/components/` folder, let the `Header` component render the title `Render API Data with React`.
5. View the page to make sure it runs without errors.
6. Code the following tasks from scratch. Don't copy/paste.
7. In the `src/components/` folder, view the file `Main.jsx`.
8. In the `Main` component, on the line after `useState`, add `const [] = useState();`. This stateful array will contain characters from Harry Potter.
9. Destructure the items into `characters` and `setCharacters`.
10. In the `main` tag, render the `characters` variable in a `section` tag.
11. View the page to make sure it runs without errors.
12. Set up the component to track the mount phase. Use `useState`, `didMount`, `setDidMount`, `useEffect`, `componentDidMount`, an empty array of dependencies, and a `p` tag to render the value of `didMount`.
13. View the page to make sure it runs without errors.
14. In `componentDidMount`, call the `handleData` function.
15. In the `Main` function and after the `return` statement, create the function `handleData`.
16. View the page to make sure it runs without errors.
17. Let `handleData` fetch data from the Harry Potter API `https://potterapi-fedeperin.vercel.app/en/characters`.
18. After parsing the API response, add the `data` variable to store the array of characters.
19. Map the data to React elements with `const details = data.map(toCharacters);`.
20. On the line after `details`, add `setCharacters(details);`.
21. Outside and under the `Main` function, create the function `toCharacters`. This will be the callback function for the `map` method.
22. View the page to make sure it runs without errors.
23. In `toCharacters` parameters, receive a `dataItem`, which will be an object from the API.
24. In `toCharacters`, add a `debugger` breakpoint, then use the debugger to inspect `dataItem`.
25. In `toCharacters`, add `const details = <details></details>;`
26. In the `details` tag, add a `summary` tag that contains the character's name from `dataItem`.
27. In the `details` tag, add a `figure` tag with an `img` tag that that displays the image from `dataItem`.
28. In the `figure` tag, add a `figcaption` tag that displays the actor's name from `dataItem`.
29. In `toCharacters`, `return` the `details` object. This object will be added to the array that `map` produces.
30. View the page to make sure it runs without errors.
31. Place `debugger` breakpoints in `Main`, and `componentDidMount`.
32. Use the `debugger` to watch the variables change - `characters` and `details`. Also, watch characters render on the page.
33. Use `Dev Tools` to inspect the DOM. Watch the `details` tags get added to the DOM tree.
34. In the `main` tag, add a `p` tag that explains how to use `map` to render a data array from an API.
35. View the page to make sure it runs without errors.

## More Information

- The `fetch` function accepts the URL of an API and an options object. The options object can be omitted if the `GET` method will be used.
- All arrays have access to the `map` method.
- The `map` method takes in a callback function.
- The callback function receives an item of the array, the index number of the item, and the complete array. If only the item is needed, parameters for the index number and the array can be omitted.
- Callback functions for the `map` method often begin with `to` and describe what they produce. Example: `toCard` produces a card and `toFigure` produces a figure.
- The `map` method returns an array of items produced by the callback function.
- [Harry Potter API documentation](https://vlaurencena.github.io/harry-potter-openapi-swagger-ui/#/Characters/get_characters)

## Usage Tips

- Because of the time it takes to receive data, the `Main` component renders API data into HTML tags sometime after the mount phase.
- In `StrictMode`, components are automatically forced to quickly mount, unmount, then mount again.
- `useEffect` always calls its callback function when the component mounts.
- [`details` and `summary` are semantic tags for subjects with descriptions.](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details).

## Hints

- `npm run dev` starts a Vite server. Remember to navigate to the project folder in the terminal and install the `node_modules` folder.
- Remember to import `useState` and `useEffect` from `react`.
- Remember to use `async` and `await` to get results from promises.
- Use curly braces to render a variable in HTML. Example: `<p>{content}</p>`
- The debugger can be used to inspect data received from APIs.
- The `key` prop error will not prevent the page from rendering.
