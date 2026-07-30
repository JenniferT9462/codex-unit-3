# State Context

## Objective

Use the StateContext component to avoid prop drilling.

## Benefits

The StateContext component gives child components access to state variables in parent components.

## Complete these tasks

1. NOTE: This level requires `prisma-template` and `spa-template` from a previous level. Complete these tasks from scratch. Do not copy/paste unless the task permits it.
2. Set up the Prisma web client: In your system's file explorer or file picker, copy your `prisma-template` folder from a previous level into this level folder. In the terminal, navigate to `prisma-template` and run `script.js`. It should work without errors after `node_modules` are installed.
3. Set up the website: In your system's file explorer or file picker, copy your `spa-template` folder into this level folder. In this level folder, rename `spa-template` to `state-context`. Change the title of the website to `Using StateContext for Centrally Stored States`. In the terminal, navigate to the `state-context` folder. Start the Vite server and open a React Debugger browser to the URL provided by Vite.
4. View the website pages and make sure they run without errors.
5. In this level folder, move `StateContext.jsx` to the `src/components/` folder, and `useStateContext.js` to the `src/hooks/` folder.
6. Wrap `StateContext` around `BrowserRouter`: In `App.jsx`, import `StateContext`. In the `App` component, place the opening tag `<StateContext>` above `<BrowserRouter>`, and the closing tag `</StateContext>` below `</BrowserRouter>`. This will give any component between the `StateContext` tags access to the state variables managed by `StateContext`.
7. View the website pages. There will be an `initialState` error.
8. Create a global state object: In the `src/states/` folder, create `global.js` that exports a `Map` object. Example: `export const global = new Map();`. This will use keys to store states that are meant to be accessed globally by all components in the project.
9. Add a state: In `global.js`, add `global.set( "Home.didMount", false );` to track the mount phase of the `Home` page.
10. Initialize `StateContext`: In `App.jsx`, import the state object from `global.js`. In the `StateContext` opening tag, add the attribute/prop to initialize state. Example: `initialState={global}`.
11. View the website pages. The `initialState` error should be fixed.
12. Use a global state: In `Home.jsx`, import `useStateContext`. In the `Home` component, add `const [didMount, setDidMount] = useStateContext("Home.didMount");`. This provides access to the state stored with the `Home.didMount` key.
13. View the website pages. Use the `debugger` to observe that `didMount` and `setDidMount` receive values.
14. Change a global state: In `Home.jsx`, track the mount phase with `useEffect`, `componentDidMount`, and `[]`. In the function `componentDidMount`, add `setDidMount(true);`.
15. View the website pages. Use the `debugger` to observe that `didMount` changes to `true` when `Home` mounts.
16. Access a global state from another component: In `ApiKey.jsx`, add `const [homeDidMount] = useStateContext("Home.didMount")`. This gives the `ApiKey` page access to the mount status of the `Home` page.
17. View the website pages. Use the `debugger` to observe that `homeDidMount` changes from `false` to `true` after `Home` mounts.
18. Create a page that uses `StateContext` in a synchronized way: In the `src/pages/` folder, create `Counter.jsx` that exports the `Counter` component which returns a `main` tag. Inside the `main` tag, render `StateContext`. In `App.jsx`, add a `Route` that renders `Counter`. Example: `path="/counter"`. In `Navbar.jsx`, add a link to the `Counter` page.
19. Add states for `Counter`: In the `src/states/` folder, create `counter.js` that exports a `Map` object. Example: `export const counter = new Map();`. Then add a state to start a count at 0. Example: `counter.set("count", 0);`. Add `counter.set("message", "Click on the counter buttons.");` In `Counter.jsx`, use the initial state. Example: `initialState={counter}`.
20. View the website pages. They should render without errors.
21. Create a component to show the count: In `src/components/`, create `Count.jsx` that renders empty tags. Add `const [count] = useStateContext("count");`. In the empty tags, render the count. Example: `<>Count: {count}</>`. In `Counter.jsx`, between the `StateContext` tags, render the `Count` component.
22. Create a component to show the message: In `src/components/`, create `Message.jsx` that renders `p` tags. Add `const [message] = useStateContext("message");`. In the `p` tags, render the message. Example: `<p>{message}</p>`. In `Counter.jsx`, after the `Count` tag, render the `Message` component.
23. View the website pages and make sure they run without errors.
24. Create a component to decrement the count: In `src/components/`, create `Decrement.jsx` that renders a TWE button with `-` as its label. Add `const [count, setCount] = useStateContext("count");`. Add another `useStateContext` for `"message"`. In the `button` tag, add a click handler. Example: `onClick={handleClick}`. In the `handleClick` function, decrement the count and change the message. Example: `setCount(count - 1);`. In `Counter.jsx`, before the `Count` component, render `Decrement`.
25. View the website pages and make sure they run without errors. Observe that clicking on the decrement button decreases the count and changes the message.
26. Create a component to increment the count: In `src/components/`, create `Increment.jsx` that renders a TWE button with `+` as its label. Use `useStateContext` for `"count"` and `"message"`. Example: `const [message, setMessage] = useStateContext("message");`. In the `button` tag, add `onClick={handleClick}`. In the function `handleClick`, increment the count and change the message. Example: `setMessage("You clicked on INCREMENT");`. In `Counter.jsx`, after the `Count` component, render `Increment`.
27. View the website pages and make sure they run without errors. Observe that clicking on the increment button increases the count and changes the message.
28. In the `Home` component, add a `p` tag that explains how to use `StateContext` and `useStateContext` to manage state without prop drilling.
29. View the website pages and make sure they run without errors.

## More Information

- Prop drilling is when a parent component passes data down through multiple layers of nested child components via props. Intermediate components may not need to use that data themselves.
- A value and setter can be destructured from `useStateContext`. Example: `const [myMessage, setMyMessage] = useStateContext("myMessage");`
- The setter can be omitted if it will not be used by a component. Example: `const [myMessage] = useStateContext("myMessage");`
- Wrap `StateContext` tags around components that should have access to the states managed by `StateContext`.

## Usage Tips

- A JavaScript `Map` creates an object that stores keys and values.
- Use the `set` method to store a value with a key. Example: `myMap.set("myNumber", 777)`.
- The key can be any string that describes the value it stores.

## Hints

- Namespace keys to make them easier to track. Example: `Home.didMount` is meant for the `Home` page.
- Name state files after their purpose or feature. Example: `global.js` for global state, and `counter.js` for states used by the `Counter` page.
