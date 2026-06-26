# No State

## Objective

Learn about stateless variables and their limitations in React.

## Benefits

Knowing the limitations of stateless variables in React will help you understand the need for stateful variables.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder. The template should render `Header`, `Main`, and `Footer` components.
2. In this level folder, rename `react-template` to `no-state`.
3. In the terminal, navigate to the `no-state` folder.
4. Start the Vite server and open the React Debugger browser. You may need to install `node_modules`.
5. In the `src/components/` folder, let the `Header` component render the title `Stateless Variables`.
6. In the `src/components/` folder, view the `Main` component.
7. Above the `return` statement, add a variable `let count = 0;`
8. In the `main` tag, add a `button` tag that says `Click counter`.
9. Add a `p` tag that renders the value of `count`.
10. Add a `p` tag that renders a message.
11. Let the message explain stateless variables and what happens when the button is clicked.
12. Inside of the `Main` function and underneath the `return` statement, create a function called `handleClick`.
13. Let `handleClick` accept an `event` object and prevent default behavior.
14. In `handleClick`, add `debugger` and increment the value of `count`.
15. Use `onClick` to attach `handleClick` to the `button`.
16. View the page in the browser.
17. Click the button. The debugger should stop in `handleClick`.
18. Inspect `count`, watch its value change, then press play in the debugger controls.
19. View the page in the browser. Observe the rendered value of `count`.

## More Information

- In React, stateless variables don't preserve their values. Their values reset each time the component function is called.
- `handleClick` needs to be defined within the `Main` function because `handleClick` needs access to `count`.
- Because `count` is defined in a function, `count` is a local variable and can only be accessed within the `Main` code block (curly braces).

## Usage Tips

- Use `onClick` to attach a handler to a `button` tag. Example: `<button onClick={handleClick}>`
- Use curly braces to render a variable in HTML tags. Example: `<p>{myVaiable}</p>`
- The React Debugger opens read-only files when debugging. You won't be able to edit code in that file.
- To edit code while debugging, close the read-only file, edit the code in the original file, save the changes, then refresh the debugger or browser.

## Hints

- `npm run dev` starts a Vite server.
- Make sure to install the `node_modules` folder.
- Use `event.preventDefault()` to prevent default element behavior.
- To increment a variable, add 1 to it. Example: `myVariable = myVariable + 1`
