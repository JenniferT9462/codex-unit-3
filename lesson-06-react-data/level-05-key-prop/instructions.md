# Key Prop

## Objective

Learn about the key prop and how to use it.

## Benefits

Proper use of the key prop will fix some render errors.

## Complete these tasks

1. In your system's file explorer or file picker, copy the `form-input` folder (from a previous level) into this level folder.
2. In this level folder, rename `form-input` to `key-prop`.
3. In the terminal, navigate to the `key-prop` folder.
4. Run `pnpm install` in the terminal to ensure `node_modules` was properly copied or installed.
5. Start the Vite server and open the React Debugger browser.
6. Code the following tasks from scratch. Don't copy/paste.
7. In the `src/components/` folder, let the `Header` component render the title `Key Prop`.
8. View the page to make sure it runs.
9. In the web page, fill in the form inputs, then submit the form.
10. View the console messages in Dev Tools. It should display an error about the `key` prop/attribute.
11. In the `src/components/` folder, view the file `Main.jsx`.
12. In `toDetails`, add a second parameter - `index`.
13. In `toDetails`, add `const key = index + formInput.label;`.
14. Add the attribute `key={key}` to the `details` tag.
15. Refresh the debugger or browser.
16. Fill in the form inputs, then submit the form.
17. Use Dev Tools to inspect the DOM. Notice that the `details` tags don't have a `key` attribute. It's an invisible attribute that React monitors.
18. In `toDetails` and `Main`, add `debugger;`.
19. Refresh the debugger or browser, fill in the form inputs, then submit the form.
20. Use the debugger to inspect the value of `key` and `values`.
21. In the `main` tag, add a `p` tag that explains the `key` prop/attribute and the second parameter of `toDetails`.
22. View the page to make sure it runs without errors.

## More Information

- When an array of React elements is created, the `key` prop/attribute should be specified for each element.
- The `key` prop/attribute is a unique ID that helps React keep track of each element. Elements should have a different `key`.
- Any unique value can be used as a `key`.
- The callback function receives an item of the array, the index number of the item, and the complete array.
- Callback functions for the `map` method often begin with `to` and describe what they produce. Example: `toCard` produces a card and `toFigure` produces a figure.
- The `map` method returns an array of items produced by the callback function.

## Usage Tips

- In `StrictMode`, components are automatically forced to quickly mount, unmount, then mount again.
- [`details` and `summary` are semantic tags for subjects with descriptions.](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details).

## Hints

- `npm run dev` starts a Vite server. Remember to navigate to the project folder in the terminal and install the `node_modules` folder.
- Use curly braces to render a variable in HTML. Example: `<p>{content}</p>`
