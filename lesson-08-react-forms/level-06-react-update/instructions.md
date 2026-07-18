# React Update

## Objective

Use the Prisma web client in React to update data.

## Benefits

Dynamically use React to perform CRUD operations on a database with an online form.

## Complete these tasks

1. NOTE: This level requires `prisma-template` and `client-template` from a previous level. Complete these tasks from scratch. Do not copy/paste unless the task permits it. Code for TW Elements can be copied/pasted.
2. Set up the Prisma web client: In your system's file explorer or file picker, copy your `prisma-template` folder from a previous level into this level folder. In the terminal, navigate to `prisma-template` and run `script.js`. It should work without errors after `node_modules` are installed.
3. Set up the website: In your system's file explorer or file picker, copy your `client-template` folder from a previous level into this level folder. In this level folder, rename `client-template` to `react-update`. Change the title of the website to `Use a React Form to Update Data`. In the terminal, navigate to the `react-update` folder. Start the Vite server and open a React Debugger browser to the URL provided by Vite. View the website pages. They should work without errors after `node_modules` are installed.
4. In the `src/components/` folder, create `Update.jsx` that exports the `Update` component with destrucutred parameters `{ prisma, setData }`. The component will accept the `prisma` client as an attribute/prop and use it to update data from the database. Then it will use `setData` to send data to components.
5. In the `Update` component, use the custom hook `useInputTWE` to initialize TWE inputs.
6. Let `Update` return a `form` that uses `fieldset`, `legend`, and a TWE input to get a product id. The user will be able to specify which product to update.
7. In the `form`, add another `fieldset` tag, `legend` tag, and add TWE inputs to get a product name, product price, and image source. The user will be able to specify the information to update. At the end of the `form`, add a TWE submit `button`.
8. In `WebClient.jsx` and under `DbPassword`, render `Update`. Give it the attribute/prop `prisma={prisma}`. This will give `Update` access to the `prisma` client. Add the attribute/prop `setData={setData}`. This will give `Update` a way to send `data` to `WebClient`.
9. View the website pages. After fixing rename and import errors, observe that the Web Client page renders.
10. In the `src/hooks/` folder, create `useUpdate.js` that exports the `useUpdate` custom hook and accepts a `prisma` object in parameters. It needs a `prisma` client to update information in the database.
11. In `useUpdate`, add `const [data, setData] = useState()`. This will store data from the database. Add `return [data, handleSubmit]` to give components access to the `data` and the form handler.
12. After the `return` statement, add the `async` function `handleSubmit` that accepts the `event` object and prevents default form behavior.
13. In `Update.jsx`, use `useUpdate`, pass it the `prisma` object, and destructure its items into `data` and `handleSubmit`. In the `form` tag, add the attribute `onSubmit={handleSubmit}`.
14. View the website pages. After fixing import errors, observe that the Web Client page renders.
15. In `useUpdate.js`, update a product in `handleSubmit`: Add `const form = event.target`. Add a `where` object to contain the product ID from `form.elements`. The `where` object will help find a product by ID.
16. Add `const data = {}`. It will contain values to update.
17. Use the `prisma` object to update the `products` table with `update({where, data})`. That is property shorthand syntax. Then save the result in the `result` variable. Note that only 1 result will be provided.
18. View the Web Client page. With a `debugger`, observe that the database will not return a `result` when a product ID is not provided or when product data is not provided.
19. In `handleSubmit`, create variables to store the product name, image, and price. Example: `const productName = form.elements.productName.value;`
20. For the `data` object, only add values if they were provided by the user: Add the `name` property if the user provided a product name. Add the `price` property if the user provided a max price. Add the `src` property if the user provided an image source. Example: `if (productName) data.name = productName;`
21. View the Web Client page. With a `debugger`, observe how `data` changes when the user inputs different values. Observe that the database only returns the updated `result`. It is an object, not an array.
22. In `handleSubmit`, after getting `result`, add `setData([result])`. That will store an array with the `result` object in it. `WebClient` expects results to be an array.
23. Let `Update` give `WebClient` the `result`: Track the update phase with `useEffect`, `componentDiUpdate`, and `[data]` for dependencies. This will be used to send `data` whenever it changes. Add the function `componentDiUpdate` and an `if` statement that checks for `data`. In the `if` code block, use `setData` to send the `result` to `WebClient`.
24. In `WebClient.jsx`, add `debugger` to the function `toDetails` to view `item` properties. Render each `item` with `key`, `Fragment`, `dt`, `dd`, and `img`.
25. View the Web Client page. After fixing any errors, observe that the updated product is rendered.
26. Add `debugger` breakpoints to `WebClient`, `Update`, `componentDidUpdate` in `Update.jsx`, `useUpdate`, and `handeSubmit` in `useUpdate.js`. Observe how these variables transfer information between components and custom hooks - `prisma`, `setData`, and `data`.
27. In the `Home` component, add a `p` tag that explains how use the Prisma web client in React to update data that matches user input.
28. View the website pages and make sure they run without errors.

## More Information

- React components can accept attributes. Example: `<MyComponent myAtrribute="myValue" />`
- React components can access them through the `props` object. Example: `function MyComponent(props) { ... }`
- The `props` object can be destructured in-line. Example: `function MyComponent({ myAttribute1, myAttribute2 })`
- To run code if a variable has a value, an `if` statement can be used. Example: `if (maxPrice) { //RUN THIS CODE IF maxPrice HAS A VALUE }`
- For help with `prisma` methods, try using `PrismaClient` in `script.js` for Intellisense popups and autocompletions.
- Property shorthand syntax can be used when an object property matches a variable. Example: Instead of `{ where: where }` the shorthand is `{ where }`.
- The `fieldset` tag groups inputs together and labels them with the `legend` tag.
- The `prisma` client's `update` method needs a `where` object and a `data` object.
- `WebClient` expects `data` to be an array, but the `prisma` update returns an object. To give `WebClient` what it expects, but the object in an array.

## Usage Tips

- The `step` can be specified for `input` tags of `type="number"`. Example: `step={0.01}`
- The `Fragment` component is the same as empty brackets, except that it can accept a `key`.
- The empty tag can group adjacent elements together without adding a parent element.
- A `key` is required when using `map` to create an array of elements.
- Keys should be unique. Example: `const key = index + item.name;`
- The details list is made with the `dl` tag. The `dt` tag represents the title. The `dd` tag represesents the description.

## Hints

- The database password should not be anywhere in the website code because all website code can be viewed publicly.
- Prisma is one of the many ways to connect to a database, but it can connect to different types of databases.
- `useEffect` callbacks such as `componentDidUpdate` are not allowed to be `async` functions. `async` functions return a Promise. `useEffect` callback functions are only allowed to return cleanup functions like `componentWillUmount`.
- A form can be cleared with the `reset` method. Example: `form.reset();`
