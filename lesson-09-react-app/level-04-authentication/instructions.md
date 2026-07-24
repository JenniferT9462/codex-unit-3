# Authentication

## Objective

Create an authentication component that displays different modals depending on a user's login status.

## Benefits

There are times when components should be shown, and when they should be hidden.

## Complete these tasks

1. NOTE: This level requires `prisma-template` and `conditional-render` from a previous level. Complete these tasks from scratch. Do not copy/paste unless the task permits it. Code for TW Elements can be copied/pasted.
2. Set up the Prisma web client: In your system's file explorer or file picker, copy your `prisma-template` folder from a previous level into this level folder. In the terminal, navigate to `prisma-template` and run `script.js`. It should work without errors after `node_modules` are installed. You may need to update it to work with foreign keys and join tables.
3. Set up the website: In your system's file explorer or file picker, copy your `conditional-render` folder from a previous level into this level folder. In this level folder, rename `conditional-render` to `authentication`. Change the title of the website to `Conditionally Render with an Authentication Component`. In the terminal, navigate to the `authentication` folder. Start the Vite server and open a React Debugger browser to the URL provided by Vite. View the website pages. They should work without errors after `node_modules` are installed.
4. Create a component to manage the login and logout process: In the `src/components/` folder, create `Authentication.jsx` that exports the `Authentication` component. Destructure its parameters into `setLogin` and `user`. It needs access to the setter function and user information.
5. Move the `Login` component to the `Authentication` component: In `WebClient.jsx`, there are lines of code with the `component` variable. Move those lines into the `Authentication` component.
6. In `Authentication.jsx`, return `component`. This will render the elements that `component` contains, which will toggle between login and logout.
7. In `WebClient.jsx`, in the `return` statement, replace `{component}` with the `Authentication` component, then add the attributes/props `setLogin={setLogin}` and `user={user}`. This will give `Authentication` access to the setter function and user information.
8. View the website pages. After fixing import errors, observe that the Web Client page renders the `Authentication` `Login` form. When a valid database password is provided, and valid credentials (email and password) are submitted, a login message should be displayed.
9. In the `src/components/` folder, create `Logout.jsx` that exports the `Logout` component. Add `return <></>` to group adjacent elements together with empty tags.
10. In the empty tags, insert the code for a TWE modal. It should include a button and the popup. Then fix the comment errors.
11. In `Authentication.jsx`, render `Logout` when a `user` is logged in.
12. View the website pages. Enter a valid database password and submit valid credentials. Fix import and React errors. Observe that the modal button is rendered, but nothing happens when it's clicked.
13. Fix the modal: In the `src/hooks/` folder, create `useModalTWE.js` that exports the `useModalTWE` custom hook. Let it track the mount phase with `useEffect`, `componentDidMount`, and `[]`. The empty array of dependencies represents the mount phase. Add the function `componentDidMount`.
14. In the TW Elements website, view the JavaScript code for the modal. Copy the `import` statement to `useModalTWE.js`. Copy the line with `initTWE` to `componentDidMount`. In `Logout.jsx`, use `useModalTWE`.
15. View the website pages. Fix import errors. Enter a valid database password and submit valid credentials. Observe that the modal popup appears when the modal button is clicked.
16. Edit the modal for logging out: In `Logout.jsx`, change the modal button label, change the modal title, and replace all occurences of `exampleModal` with `logoutModal`. In the modal body, ask something like `Are you sure you want to logout?`. Label the buttons in the popup to cancel or confirm the logout.
17. View the website pages. Observe that the modal button and popup appear for logging out.
18. Give `Logout` a way to clear `user` information: In `Authentication.jsx`, where `Logout` is rendered, add the attribute/prop `setLogin={setLogin}`. In `Logout.jsx`, destructure `setLogin` in parameters.
19. In `Logout.jsx`, on the button that confirms logout, add the attribute `onClick={handleLogout}`. Under the `return` statement, create the function `handleLogout`. In `handleLogout`, create a `data` object that represents empty login credentials. Use `setLogin` to save the `data` object in the state variable.
20. View the website pages. Fix any errors. Attempt to logout. Observe that the `Logout` modal disappears, the `Login` form appears, but the page becomes dim and unresponsive.
21. Properly close the `Logout` modal: In `Logout.jsx`, before the `return`, add `const ref = useRef(null);`. This object provides direct access (a reference) to HTML element that it's attached to.
22. On the `button` with `aria-label="Close"`, add the attribute `ref={ref}`. That attaches the `ref` object to the close button.
23. In `handleLogout`, add `ref.current.click()`. This clicks on the close button. The `current` property refers to the element (close button) that the `ref` is attached to.
24. View the website pages. After fixing import errors, observe that the page is responsive after logging out. Observe that user information is cleared when the page is reloaded.
25. Save and persist `user` information in `localStorage`: View `useLogin.js`. In `handleLogin`, use `JSON.stringify` on the user information, then save it with `localStorage.setItem`.
26. In `componentDidUpdate`, restore user information with `localStorage.getItem`, use `JSON.parse` to convert it to an object, then save it with `setUser`.
27. Add `debugger` breakpoints to `WebClient`, `Authentication`, `Login`, and `Logout`. Observe how these variables transfer information between components and custom hooks - `login` and `component`.
28. In the `Home` component, add a `p` tag that explains how to persist login information and logout a user with a TWE modal.
29. View the website pages and make sure they run without errors.

## More Information

- Empty login credentials can be represented by an object. Example: `{ email: "", password: "" }`
- A modal is a popup window that appears, usually when a button is pressed.
- The `useRef` hook provides a direct reference to an HTML elements. The element doesn't need an ID to access it.
- To conditionally render components, first store them in a variable, and render that variable. Example: `let component = <MyComponent />`. Then change the value of the variable with a condition. `if (shouldHide) component = <></>;`
- To authenticate a user, use a `where` object to find their record in the database.
- Setter function can be passed between components to give them access to change variable in other components. Example: `<Login setLogin={setLogin} />`
- React components can accept attributes. Example: `<MyComponent myAtrribute="myValue" />`
- React components can access them through the `props` object. Example: `function MyComponent(props) { ... }`
- The `props` object can be destructured in-line. Example: `function MyComponent({ myAttribute1, myAttribute2 })`
- To run code if a variable has a value, an `if` statement can be used. Example: `if (productName) { //RUN THIS CODE IF productName HAS A VALUE }`

## Usage Tips

- The `fieldset` tag groups inputs together and labels them with the `legend` tag.
- The `Fragment` component is the same as empty brackets, except that it can accept a `key`.
- The empty tag can group adjacent elements together without adding a parent element.
- A `key` is required when using `map` to create an array of elements.
- Keys should be unique. Example: `const key = index + item.name;`
- The details list is made with the `dl` tag. The `dt` tag represents the title. The `dd` tag represesents the description.

## Hints

- In `WebClient`, the `data` object is not used. It can be deleted.
- Prisma is one of the many ways to connect to a database, but it can connect to different types of databases.
- `useEffect` callbacks such as `componentDidUpdate` are not allowed to be `async` functions. `async` functions return a Promise. `useEffect` callback functions are only allowed to return cleanup functions like `componentWillUmount`.
- A form can be cleared with the `reset` method. Example: `form.reset();`
