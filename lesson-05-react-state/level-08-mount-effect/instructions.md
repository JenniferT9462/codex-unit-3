# Mount Effect

## Objective

Use a stateful variable to track a component during its mount phase.

## Benefits

Every visible component goes through the mount phase.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder. The template should render `Header`, `Main`, and `Footer` components.
2. In this level folder, rename `react-template` to `mount-effect`.
3. In the terminal, navigate to the `mount-effect` folder.
4. Start the Vite server and open the React Debugger browser.
5. In the `src/components/` folder, let the `Header` component render the title `Mount Effect`.
6. In the `src/components/` folder, view the `Main` component.
7. Above the `return` statement, add `const [] = useState(false);` which begins destructuring the array from `useState`.
8. Destructure `didMount` as the first item of the array. This stateful variable will indicate when the component has mounted.
9. Destructure `setDidMount` as the second item of the array. This setter function changes the value of `didMount`.
10. Add `debugger` on the line after `useState`.
11. In the `main` tag, render the value of `didMount` in a `p` tag.
12. Inside of the `Main` function and underneath the `return` statement, create a function called `componentDidMount`.
13. Let `componentDidMount` use `setDidMount` to set `didMount` to `true`.
14. In `componentDidMount`, add `debugger`.
15. On the line under `useState`, call the `useEffect` function. You may need to import it from `react`.
16. Pass `componentDidMount` as the callback function for `useEffect`, and give `useEffect` an empty array of dependencies.
17. Refresh the debugger and view the page in the browser. The debugger should stop in `Main`.
18. Run the code line by line.
19. Inspect the initial value of `didMount`.
20. When the debugger gets into code that isn't yours, press play in the Debugger Controls.
21. Observe the value of `didMount` displayed on the page.
22. The debugger should stop in `componentDidMount`.
23. Run the code line by line until it gets into code that isn't yours, then press play.
24. In the `main` tag, add a `p` tag that renders a message.
25. Let the message explain `useEffect` and how to use it to track a component during the mount phase. Use your own words. Don't copy/paste.
26. View your message in the browser.

## More Information

- In programming, an effect (or side effect) is when a function interacts or changes something outside the function.
- The `useEffect` function takes in a callback function and a list of dependencies (variables to monitor).
- `useEffect` will call the callback function when its dependencies (variables in the list) have changed.
- An empty array of dependencies will cause `useEffect` to call the callback function only during the mount phase.
- To display the value of a Boolean variable in React, concatination syntax or a template string can be used. Example: `{"didMount: " + didMount}`

## Usage Tips

- To change the value with a setter function, provide the new value. Example: `setCount(5);`
- `useEffect` takes in a callback function and an array of variables. Example: `useEffect( myFunction, [myVariable1, myVariable2] )`
- The React Debugger opens read-only files when debugging. You won't be able to edit code in that file.
- To edit code while debugging, close the read-only file, edit the code in the original file, save the changes, then refresh the debugger or browser.

## Hints

- `npm run dev` starts a Vite server.
- Make sure to install the `node_modules` folder.
- Remeber to import `useState` from `react`.
- Use curly braces to render a variable in HTML tags. Example: `<p>{myVariable}</p>`
