# Refactor Logic

## Objective

Refactor logic out of the Web Client and other components.

## Benefits

By separating logic from rendering, code is kept readable and reusable.

## Complete these tasks

1. NOTE: This level requires `react-refactor` from a previous level.
2. Set up the Prisma web client: In the VS Code terminal, navigate to this level folder. Use `npm` to initialize a project, and set the `type` to `module`. Install these packages - `prisma@6`, `dotenv`, and `prisma-json-schema-generator`. Initialize Prisma in the terminal: `npx prisma init`. In `.schema.prisma`, change the `provider` for the `client` to `prisma-client-js`. Under the `client` generator, add the `jsonSchema` generator. In `.env`, replace the string for `DATABASE_URL` with the `Connection string` from Supabase `Session pooler`. In the connection string, replace `[YOUR-PASSWORD]` with the database password you created (or generated).
3. Synchronize Prisma with your database: `npx prisma db pull`. Generate a client to connect to your database: `npx prisma generate`. Information about tables will be added to `prisma/schema.prisma`. Make sure the Prisma web client can connect to your database: In `script.js` import `createWebClient` from `web-client.js`. `await` for the web client to be created. Give the client `json-schema.json`. Use it to get all items from the `products` table. `console.log` the results.
4. Run `script.js`. It should work without errors.
5. Set up the website: In your system's file explorer or file picker, copy your `react-refactor` folder from a previous level into this level folder. In this level folder, rename `react-refactor` to `refactor-logic`. Change the title of the website to `Refactor to Separate Logic from Rendering`. In the terminal, navigate to the `refactor-logic` folder. Start the Vite server and open a React Debugger browser to the URL provided by Vite.
6. View the website pages and make sure they run without errors. When a valid password is provided, products should be rendered. When a new product is added, it should be rendered.
7. In the folder `src/hooks/`, create `usePrisma.js` that exports the `usePrisma` custom hook.
8. In the `WebClient.jsx`, import `usePrisma` and use it in the `WebClient` component.
9. Move the logic: In `WebClient.jsx`, move `componentDidUpdate` and `handleData` into the `usePrisma` custom hook. Also move the `useEffect` line because `usePrisma` needs it to run `componentDidUpdate`.
10. View the Web Client page in the browser. It should show an error because `usePrisma` needs `password`.
11. In the `WebClient.jsx` component, pass the `password` to the `usePrisma` hook. Example: `usePrisma(password);`. Make sure to call `usePrisma` after `password` is defined.
12. In `usePrisma.js`, accept `password` in the parameters.
13. View the Web Client page in the browser. After fixing some import errors, it should show an error because `usePrisma` needs `setData`.
14. In `WebClient.jsx`, pass `setData` to `usePrisma`. Observe that `WebClient` is responsible for rendering `data`, and passes `setData` to the `Create` component, so it makes sense to keep `setData` in `WebClient` instead of moving it to `usePrisma`.
15. In `usePrisma.js`, add `setData` as a parameter.
16. View the Web Client page in the browser. It should show an error because `usePrisma` needs `setPrisma`.
17. In `WebClient.jsx`, move the `setPrisma` line to `usePrisma`. It makes sense to move `setPrisma` because the name `usePrisma` implies that it'll provide the Prisma web client.
18. In `usePrisma.js` add `return prisma`.
19. In `WebClient.jsx`, store the return value of `usePrisma` into the `prisma` variable.
20. View the Web Client page in the browser. After fixing some import errors, the page should work as expected.
21. Observe that `WebClient` now focuses on rendering. As a parent component, it also passes values to child components.
22. If `WebClient` is using the custom hook `useInputTWE`, move it into components that use it - `DbPassword` and `Create`. Then view the Web Client page in the browser. After fixing some import errors, the page should work as expected.
23. Observe that the `DbPassword` component doesn't use any logic. It just sets values. It doesn't need to be refactored.
24. Begin refactoring the `Create` component: In `src/hooks/`, create the file `useCreate.js` that exports the `useCreate` custom hook.
25. In `Create.jsx`, move the `handleCreate` function into `useCreate`.
26. In the `Create` component, use `useCreate`.
27. There will be an error because `Create` needs `handleCreate`. In `useCreate.js`, let `useCreate` return `handleCreate`. In `Create.jsx`, capture the return value into the variable `handleCreate`.
28. There will be errors because `useCreate` needs `prisma` and `setData`. In `Create.jsx`, pass `prisma` and `setData` to `useCreate`. In `useCreate.js`, accept `prisma` and `setData` as parameters.
29. View the Web Client page in the browser. After fixing some import errors, the page should work as expected.
30. Add `debugger` breakpoints in `WebClient`, `usePrisma`, `Create`, and `useCreate`. Observe as `password` and `setData` are passed to `usePrisma`. Observe as `usePrisma` returns the `prisma` object. Observe as `prisma` and `setData` are passed to `useCreate`. Observe as `useCreate` returns `handleCreate`. You may need to disable `StrictMode` for a smoother experience.
31. In the `Home` component, add a `p` tag that explains how to refactor logic out to custom hooks, how to pass values to custom hooks, and how to return values from custom hooks.
32. View the website pages and make sure they run without errors.

## More Information

- Parent components can coordinate their child components by passing values to them.
- When refactoring code, make sure it has access to its dependencies - the variables and functions it depends on.
- When a component needs logic, begin writing it in a custom hook. Let custom hooks accept the parameters they need, and return values that components need.
- The database password should not be anywhere in the website code because all website code can be viewed publicly.
- The `Fragment` component is the same as empty tags, except that it can accept a `key`.
- A `key` is required when using `map` to create an array of elements.
- Keys should be unique. Example: `const key = index + item.name;`
- The file `.env` is used to store confidential information.
- From the browser, the Prisma web client cannot access `.env`, which is only accessible in NodeJs.

## Usage Tips

- The initial value of `data` should be an array because arrays have access to the `map` method.
- When using React, external files should be imported into variables.
- When using NodeJs, external files can be referenced by their path.
- `useEffect` callbacks such as `componentDidUpdate` are not allowed to be `async` functions. `async` functions return a Promise. `useEffect` are only only to return cleanup functions like `componentWillUmount`.
- Components can receive attributes through the `props` object. Example: `function MyComponent(props)`
- The `props` object can be destructured in-line. Example: `function MyComponent({ myProp1, myProp2 })`
- React does not allow setter functions to run before `return` statments. Instead, setter functions can run within `useEffect` or event handlers.

## Hints

- A form can be cleared with the `reset` method. Example: `form.reset();`
- Prisma is one of the many ways to connect to a database, but it can connect to different types of databases.
- By default, Prisma generates clients in TypeScript.
