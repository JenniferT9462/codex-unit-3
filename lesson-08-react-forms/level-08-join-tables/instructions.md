# Join Tables

## Objective

Use the Prisma web client in React to view joined tables.

## Benefits

Joined tables provide a convenient way to view related data.

## Complete these tasks

1. NOTE: This level requires `prisma-template` and `react-read` from a previous level. Complete these tasks from scratch. Do not copy/paste unless the task permits it.
2. In the `codex-unit-3` database in `https://supabase.com/`, create a new table called `reviews`. This will contain product reviews.
3. Add a `stars` column of type `int2`. This will contain an integer that represents the number of stars a product has received.
4. Add a `product_id` column of type `int8`. This will contain the ID of the product that received the stars. Add a `user_id` column of type `int8`. Default settings are ok. This will contain the ID of the user that provided the star rating.
5. Click on `Add foreign key relation`. Let it reference the `products` table. For `public.reviews`, select `product_id`. For `public.products`, select `id`. Default settings are ok. Click on `Save`. This will join the two tables together, establishing a relationship between them, that the `product_id` in the `reviews` table refers to an `id` in the `products` table.
6. Click again on `Add foreign key relation`. Let it reference the `users` table. For `public.reviews`, select `user_id`. For `public.users`, select `id`. Default settings are ok. Click `Save`. This will join the two tables together, establishing a relationship between them, that the `user_id` in the `reviews` table refers to an `id` in the `users` table.
7. Prepare a review: In the `products` table, note the `id` of a product to review. In the `users` table, note the `id` of a user to associate with the review.
8. Add a review: In the `reviews` table, `Insert` a record. For `stars`, put an integer (e.g., 5 stars). For `product_id`, put the product ID you noted. For `user_id`, put the user ID you noted. Default settings are ok. Click on `Save`. This means the user gave the product some stars.
9. Add another review from the same user, but for a different product.
10. Add another review, for the same product, but from a different user.
11. Set up the Prisma web client: In your system's file explorer or file picker, copy your `prisma-template` folder from a previous level into this level folder. In the terminal, navigate to `prisma-template` and install `node_modules`. Run `npx prisma db pull` to get information about the new `reviews` table. Run `npx prisma generate` to update the Prisma client. Let `script.js` use `findMany` show all items in the `products` table.
12. Run `script.js`. There will be errors because information about foreign keys are missing in `json-schema.json`.
13. Fix the errors: Delete `web-client.js` in `prisma-template` and move `web-client.js` in this level folder to the `prisma-template`. This uses a web client that's compatible with foreign keys. Add `keepRelationScalarFields = "true"` to `schema.prisma` in the `generator jsonSchema` section. This will cause data about foreign keys to be included in `json-schema.json`. Run `npx prisma generate` to update `json-schema.json` with foreign keys.
14. Run `script.js`. It should run without errors. Observe that information about `reviews` is not included with `products`.
15. In `script.js`, for `findMany` options, use `{ include: { reviews: true } }`. That will join the `products` and `reviews` table.
16. Run `script.js`. Observe that information about `products` and their `reviews` are joined together. `JSON.stringfy(results, null, 2)` can be used to display information about nested objects.
17. Update `script.js` to display the `users` table joined with the `reviews` table, then to display the `reviews` table joined with the `products` and `users` table.
18. Run `script.js`. Observe that information about `products`, `reviews`, and `users` are joined together.
19. Set up the website: In your system's file explorer or file picker, copy your `react-read` folder from a previous level into this level folder. In this level folder, rename `react-read` to `join-tables`. Change the title of the website to `Join Tables in Supabase and View Their Combined Data in React`. In the terminal, navigate to the `join-tables` folder. Start the Vite server and open a React Debugger browser to the URL provided by Vite. View the website pages. It should work without errors after `node_modules` are installed.
20. In the `src/hooks/` folder, view `useRead.js`. Update the Prisma web client to `include` the `reviews` table.
21. Use a `debugger` breakpoint to confirm that `products` and `reviews` data are joined.
22. Update `useRead` to `include` the `users` table: Instead of `reviews: true`, let `reviews` be an object to `include` the `users` table.
23. Use the `debugger` to confirm that `products`, `reviews`, and `users` data are joined.
24. In `WebClient.jsx`, add `debugger` to the function `toDetails` to view `item` properties. In the `dd` tag, add `<Reviews />` and pass it the reviews array through the `reviews` attribute/props.
25. In the `src/components/` folder, create `Reviews.jsx` that exports the `Reviews` component and destructures the `reviews` attribute/prop. Let it `return` a `dl` tag that contains `reviews.map(toDetails)`.
26. Add the `toDetails` function to render reviews: Use `key`, `Fragment`, `dt`, and `dd`. In `dt`, render the number of stars. In `dd`, render user info.
27. View the Web Client page. After fixing any errors, observe that products are rendered with reviews and their user author.
28. In the `Home` component, add a `p` tag that explains how use the Prisma web client in React to join nested data and render it.
29. View the website pages and make sure they run without errors.

## More Information

- A table is like an array of objects. Example: The `products` table is like an array of product objects.
- If data should be represented by an array, a table can represent the data: Example: A product should have an array of reviews, so there should be a `reviews` table.
- A foreign key represents a relation or connection between tables. Example: The `reviews` table has the foregn key `product_id` because a review is connected to a product.
- A foreign key is usually an `id` or something unique.
- The naming convention for foreign keys is a single subject and `_id`. Example: `product_id`
- The Prisma web client needs information on foreign keys that a table uses.
- By default, information about foreign keys are not included `json-schema.json`.
- To include foreign keys in `json-schema.json`, add `keepRelationScalarFields = "true"` to `generator jsonSchema` in `schema.prisma`.
- The `include` object can join tables together. Specify the table name and `true`. Example: `{ include: { reviews: true } }`
- The `include` object can specify nested tables. Example:

```javascript
{
  include: {
    reviews: {
      include: {
        users: true
      }
    }
  }
}
```

## Usage Tips

- React components can accept attributes. Example: `<MyComponent myAtrribute="myValue" />`
- React components can access them through the `props` object. Example: `function MyComponent(props) { ... }`
- The `props` object can be destructured in-line. Example: `function MyComponent({ myAttribute1, myAttribute2 })`
- Property shorthand syntax can be used when an object property matches a variable. Example: Instead of `{ where: where }` the shorthand is `{ where }`.
- For help with `prisma` methods, try using `PrismaClient` in `script.js` for Intellisense popups and autocompletions.
- The `Fragment` component is the same as empty brackets, except that it can accept a `key`.
- The empty tag can group adjacent elements together without adding a parent element.
- A `key` is required when using `map` to create an array of elements.
- Keys should be unique. Example: `const key = index + item.name;`
- The details list is made with the `dl` tag. The `dt` tag represents the title. The `dd` tag represesents the description.

## Hints

- Prisma is one of the many ways to connect to a database, but it can connect to different types of databases.
- `useEffect` callbacks such as `componentDidUpdate` are not allowed to be `async` functions. `async` functions return a Promise. `useEffect` callback functions are only allowed to return cleanup functions like `componentWillUmount`.
- A form can be cleared with the `reset` method. Example: `form.reset();`
