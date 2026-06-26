# Object Destructuring

## Objective

Destructure an object into separate variables.

## Benefits

Destructuring an object provides a convenient way to assign properties of an object to variables.

## Complete these tasks

1. In this level folder, create the file `props.js`.
2. In `props.js`, export an object called `props`.
3. In the `props` declaration, add the properties `title` and `message`.
4. Let `title` be the string `Object Destructuring`.
5. Let `message` be a string that explains object destructuring.
6. In this level folder, create the file `script.js`.
7. In `script.js`, import the `props` object.
8. Begin destructuring the `props` object. Example: `const {} = props;`
9. In the curly braces, list the properties of `props`.
10. The destructured properties are now variables.
11. Use `console.log` to display the values of those variables.
12. Run the script.

## More Information

- Object distructuring is when an objects properties are stored in separate variables.
- JavaScript provides syntax to destructure an object with 1 line of code.
- When an object is provided on the righthand side of an equal sign, the object can be destructured on the lefthand side of the equal sign.
- Because objects are represented by curly braces, it makes sense to destructure objects with curly braces.

## Usage Tips

- To destructure an object, specify variables on the lefthand side that match the object's properties. Example: `const {color, year} = myCar;`
- For a named export, use `export` and a variable declariation. Example: `export const x = 5;`
- For named imports, use `import`, the list of exported variables in curly braces, `from`, and the relative path. Example: `import {myVariable1, myVariable2} from "./myVariables.js" `
- Objects are represented by curly braces and key/value pairs. Example:

```javascript
const myCar = {
  color: "red",
  year: 2026,
};
```

## Hints

- It's not required to destructure (or extract) all object properties. Example: `const {year} = myCar;`
- Destructured variables can be reassigned with `let`. Example: `let {color, year} = myCar;`
- A variable can be declared and assigned on the same line. Example: `const x = 5;`
- A variable can be declared and assigned on separate lines. Example:

```javascript
let x;
x = 5;
```
