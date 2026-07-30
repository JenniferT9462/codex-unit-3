# Sort Data

## Objective

Use controlled inputs to sort products by name or price.

## Benefits

Radio buttons can be used as controlled inputs to choose a sort method.

## Complete these tasks

1. NOTE: This level requires `prisma-template` and `search-filter` from a previous level. Complete these tasks from scratch. Do not copy/paste unless the task permits it. Code for TW Elements can be copied/pasted.
2. Set up the Prisma web client: In your system's file explorer or file picker, copy your `prisma-template` folder from a previous level into this level folder. In the terminal, navigate to `prisma-template` and run `script.js`. It should work without errors after `node_modules` are installed. You may need to update it to work with foreign keys and join tables.
3. Set up the website: In your system's file explorer or file picker, copy your `search-filter` folder from a previous level into this level folder. In this level folder, rename `search-filter` to `sort-data`. Change the title of the website to `Real-time Sort with Controlled Inputs`. In the terminal, navigate to the `sort-data` folder. Install `node_modules`. Start the Vite server and open a React Debugger browser to the URL provided by Vite.
4. View the website pages. After a valid database password is entered, all products should render.
5. In the `src/components/` folder, create `Sort.jsx` that exports the `Sort` component. Let it return a `form` tag. In the `form` tag, add a `fieldset` tag. In the `fieldset` tag, add a `legend` tag and two TWE radio boxes.
6. In `WebClient.jsx`, render the `Sort` component.
7. View the website pages. After fixing import errors, observe that `Sort` renders.
8. Customize the radio buttons: `Sort.jsx` should let the user choose which sort method to use. In the `legend` tag, put a title like `Sort products by:`. Customize one radio button for sorting products by name. Customize the other radio button for sorting products by price. Example: `id="sortByPrice"` and `value="sortByPrice"`. Both radio buttons should have the same `name` to group them together. Example: `name="sort"`.
9. View the website pages. After fixing any errors, observe that the radio buttons render without errors in the console.
10. Turn the radio buttons into controlled inputs: In `Sort.jsx`, use `useControlledInput` to manage the radio buttons. Example: `const [sortBy, handleSort] = useControlledInput();`. Attach the handler to each radio button. Example: `onChange={handleSort}`. Radio buttons in the same group should have the same handler.
11. View the website pages. After fixing import errors, use the `debugger` to observe that the variable from `useControlledInput` indicates which radio button is selected.
12. `Sort` needs a way to send the sort method to `WebClient`: In `WebClient.jsx`, add `const [sortBy, setSortBy] = useState([]);`. This will store the sort method. Where `Sort` is rendered, add the attribute/prop `setSortBy={setSortBy}`. This gives the setter to `Sort`. In `Sort.jsx`, destructure `setSortBy` in parameters. This gives `Sort` access to the setter.
13. View the website pages. Use the `debugger` to observe that `Sort` receives `setSortBy` from `WebClient`.
14. Send the sort method to `WebClient`: In `Sort.jsx`, track the update phase. Example: `useEffect(componentDidUpdate, [sortBy]);`. Create the function `componentDidUpdate`.
15. In `componentDidUpdate`, use `setSortBy` to send the sort method to `WebClient`.
16. View the website pages. After fixing import errors, use the `debugger` to observe that `WebClient` receives the sort method when a radio button is selected.
17. Create a custom hook to sort products: In the `src/hooks/` folder, create `useSort.js` that exports the custom hook `useSort` which accepts `products` and `sortBy` as parameters.
18. Add `const [results, setResults] = useState([]);` to store sort results in an array. Add `return results;` to give components access to the sort results.
19. In `WebClient.jsx`, use `useSort`, pass it `searchResults` and `sortBy`, then store the return value in `sortResults`. This will sort the search results. In the `output` tag, replace `searchResults.map` with `sortResults.map` so the sorted products can be rendered.
20. View the website pages. After fixing import errors and entering the database password, use the `debugger` to observe that `products` and `sortBy` are receive in `useSort.js`, and that `WebClient` renders empty sort results.
21. Sort the search results: In `useSort.js`, track the update phase with `useEffect`, `componentDidUpdate`, and `[products, sortBy]`. That'll call `componentDidUpdate` whenever `products` or `sortBy` changes.
22. Create the function `componentDidUpdate`, then add an `if` statement that checks for `products`. In the code block for the `if` statment, add `const sortResults = products.toSorted(byMethod);`. Arrays come with the `toSorted` method that takes a callback function that runs the sort logic. Use `setResults` to save `sortResults` in the state variable.
23. Create the function `byMethod` that takes `item1` and `item2` as parameters. It should return a negative number if `item1` should go before `item2`, return a positive number if `item1` should go after `item2`, and return 0 if both items should stay where they are.
24. In `byMethod`, add a `switch` statment that checks the sort method. Example: `switch(sortBy) {}`. In the code block, add `default: return 0;` which means return 0 by default, which will keep the items where they are in the array.
25. View the website pages. After fixing import errors, use the `debugger` to observe that `useSort` returns all products, and that `WebClient` renders all products.
26. Sort by price: In `byMethod`, in the `switch` code block above `default`, add a `case` for sorting by price. Example: `case "sortByPrice":`. After `case`, add `const result = Number(item1.price) - Number(item2.price);` and `return result;`. That converts the `price` strings to numbers, then if the price of `item1` is less than the price of `item2`, a negative number will be returned, indicating that `item1` should go before `item2` in the array.
27. View the website pages. Select the radio button to sort by price. Use the `debugger` to observe how the `switch` statement compares the sort method and runs the `case` code. After fixing logic errors, products should be rendered and sorted by price.
28. Sort by name: In `byMethod`, in the `switch` code block above `default`, add a `case` for sorting by name. Example: `case "sortByName":`. In the `case`, add `const result = item1.name.localeCompare(item2.name);` and `return result;`. Strings come with the `localeCompare` that compares the string to another string and produces a result - either a negative number, positive number, or 0.
29. View the website pages. Select the radio button to sort by name. Use the `debugger` to observe how the `switch` statement compares the sort method and runs the `case` code. After fixing logic errors, products should be rendered and sorted by name.
30. In the `Home` component, add a `p` tag that explains how to use controlled inputs, a `switch` statement, and sort methods to render real-time sorted results.
31. View the website pages and make sure they run without errors.

## More Information

- Arrays come with the `toSorted` that takes a callback function and returns the sorted array. Example: `const sortedBooks = unsortedBooks.toSorted( byYear );`. The callback function compares 2 items in the array, then returns a negative number if `item1` should go before `item2`, returns a positive number if `item1` should go after `item2`, and returns 0 if both items should stay where they are in the array.
- Strings come with the `localeCompare` method. Example: `const result = myString.localeCompare( otherString );`. For sorting, the result is either a negative number, positive number, or 0.
- The `value` property on radio buttons will help determine which radio button is selected.
- Radio buttons that are in the same group should have the same `name`.
- Arrays come with the `filter` methods. It takes a callback function that should return true when an item matches requirements.
- Controlled inputs do not require the `submit` event to view their values.
- The `switch` statement is like an `if` statement that only checks for equality by taking in a value and checking if it equals other values. Example: `switch( myValue ) { ... }`
- The `case` clause provides a value for `switch` to compare. Example: `case "Hello World": ...`. If the values match, the code in the `case` clause will run.
- The `default` clause will run code if none of the `case` clauses match the `switch` value. Example: `default: ...`
- The `break` statement exits the `switch` statement. Example:

```js
switch (myString) {
  case "dog":
    console.log("That is an animal.");
    break;
  case "bee":
    console.log("That is an insect.");
    break;
  default:
    console.log("That's interesting.");
}
```

## Usage Tips

- When a `return` statment runs in a `switch` statement, the `switch` statement is exited.
- React components can accept attributes. Example: `<MyComponent myAtrribute="myValue" />`
- React components can access them through the `props` object. Example: `function MyComponent(props) { ... }`
- The `props` object can be destructured in-line. Example: `function MyComponent({ myAttribute1, myAttribute2 })`
- To run code if a variable has a value, an `if` statement can be used. Example: `if (productName) { //RUN THIS CODE IF productName HAS A VALUE }`
- The `fieldset` tag groups inputs together and labels them with the `legend` tag.

## Hints

- In `WebClient`, the `data` object is not used. It can be deleted.
- Prisma is one of the many ways to connect to a database, but it can connect to different types of databases.
- A form can be cleared with the `reset` method. Example: `form.reset();`
