# Array Destructuring

## Objective

Destructure an array into separate variables.

## Benefits

Destructuring an array provides a convenient way to assign items of an array to variables.

## Complete these tasks

1. In this level folder, create the file `results.js`.
2. In `results.js`, add a function called `displayMessage`. Don't export this function.
3. Let `displayMessage` use `console.log` to display a message.
4. Let the message explain how to destructure an array.
5. In `results.js`, export an array called `results`.
6. In the `results` declaration, add the items `5` and `greet`.
7. In this level folder, create the file `script.js`.
8. In `script.js`, import the `results` array.
9. Add `debugger`.
10. Begin destructuring the `results` array. Example: `const [] = results;`
11. In the square brackets, let `count` and `displayMessage` store the items of `results`.
12. The destructured items are now variables.
13. Use `console.log` to display the value of `count`.
14. Call the function `displayMessage`.
15. Run `script.js` in a JavaScript Debug Terminal. The debugger should stop in `script.js`.
16. Inspect the destructured variables `count` and `displayMessage`.
17. Continue the debugger by going line-by-line or pressing play.

## More Information

- Array distructuring is when an array's items are stored in separate variables.
- JavaScript provides syntax to destructure an array with 1 line of code.
- When an array is provided on the righthand side of an equal sign, the array can be destructured on the lefthand side of the equal sign.
- Because arrays are represented by square brackets, it makes sense to destructure arrays with square brackets.

## Usage Tips

- To destructure an array, specify variables on the lefthand side that match the item positions. Example: `const [count, displayMessage] = results;`
- For a named export, use `export` and a variable declariation. Example: `export const x = 5;`
- For named imports, use `import`, the list of exported variables in curly braces, `from`, and the relative path. Example: `import {myVariable1, myVariable2} from "./myVariables.js" `
- Arrays are represented by square brackets and a list of items. Example: `const letters = [ "aaa", "bbb", "ccc" ];`

## Hints

- It's not required to destructure (or extract) all array items. Example: `const [count] = results;`
- Destructured variables can be reassigned with `let`. Example: `let [count, displayMessage] = results;`
- A variable can be declared and assigned on the same line. Example: `const x = 5;`
- A variable can be declared and assigned on separate lines. Example:

```javascript
let x;
x = 5;
```
