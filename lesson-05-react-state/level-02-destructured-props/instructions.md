# Destructured Props

## Objective

Destructure the props object into separate variables.

## Benefits

Destructuring React props is a commonly used syntax.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder. The template should render `Header`, `Main`, and `Footer` components.
2. In this level folder, rename `react-template` to `destructured-props`.
3. In the terminal, navigate to the `destructured-props` folder.
4. Start the Vite server and open the React Debugger browser. You may need to install `node_modules`.
5. Open `App.jsx` and view the `App` component. It should render the components `Header`, `Main`, and `Footer`.
6. In the `Header` tag, add the attribute `title="Destructured Props"`.
7. In the `Main` tag, add the attribute `message=""`.
8. Let `message` explain how to destructure `props`.
9. In the `src/components/` folder, view the `Header` component.
10. Let `Header` accept a parameter called `props`.
11. Add `debugger` before the return statement.
12. Refresh the debugger or browser. It should stop on the `debugger`.
13. Inspect the `props` object. It should contain the `title` that was passed to the `Header` component.
14. Replace `props` with curly braces and a list of attributes to destructure. Example: `{title}`
15. Use the debugger to inspect the value of `title`.
16. Render `title` in an `h1` tag.
17. Add `debugger` in the `Main` function of `Main.jsx`.
18. In `Main` parameters, destructure any attributes passed to the `Main` component. Example: `{message}`
19. Use the debugger to inspect the value of `message`.
20. Render `message` in a `p` tag.
21. View the page in the browser.

## More Information

- React components accept a `props` object that contains information the component can use.
- `props` is a regular JavaScript object, so it can be destructured.
- To structure the `props` parameter, replace it with curly braces and a list of properties to destructure.
- Because objects are represented by curly braces, it makes sense to destructure objects with curly braces.

## Usage Tips

- The React Debugger opens read-only files when debugging. You won't be able to edit code in that file.
- To edit code while debugging, close the read-only file, edit the code in the original file, save the changes, then refresh the debugger or browser.
- To add a red dot breakpoint, click to the left of a line number.
- HTML attributes go in the opening tags or self closing tags. Example:

```jsx
<p id="message">Hello World!</p>
<img src="picture.jpg">
```

## Hints

- `npm run dev` starts a Vite server.
- Make sure to install the `node_modules` folder.
- Use curly braces `{}` to insert variables into HTML.
