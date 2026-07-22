# CRUD

## Objective

Create, read, update, and delete data programmatically.

## Benefits

Your programs will be able to edit databases instead of manually editing them by hand.

## Complete these tasks

1. In the `codex-unit-3` database in `https://supabase.com/`, click on the `Connect` button at the top. Select `Direct` → select `Session pooler` → take note of the `Connection string`.
2. In the terminal, navigate to this level folder, use `npm` to initialize a project, and set the `type` to `module`. The other default settings are ok.
3. Initialize Prisma in the terminal: Install `prisma@6` and `dotenv`. `npx prisma init`. In `.schema.prisma`, change the `provider` to `prisma-client-js`. In `.env`, replace the string for `DATABASE_URL` with the `Connection string` that you noted from Supabase `Session pooler`. In the connection string, replace `[YOUR-PASSWORD]` with the database password you created (or generated).
4. Synchronize Prisma with your database: `npx prisma db pull`. Generate a client to connect to your database: `npx prisma generate`.
5. Make sure Prisma can connect to your database: In `script.js` import `PrismaClient`, use it to access data from the database, then `console.log` the results.
6. Run `script.js` and make sure it runs without errors.
7. In the `codex-unit-3` database in `https://supabase.com/`, create a new table called `users`.
8. Add an `email` column of type `text`. Add a `password` column of type `text`. Default settings are ok. This will store user logins. Click on `Save`.
9. Synchronize Prisma again to get the new table: `npx prisma db pull`. Generate a client to connect to your database: `npx prisma generate`.
10. Observe the file `schema.prisma`. Information about the `users` table should have been added.
11. Create the file `create.js`. In that file, add code for the `prisma` client to access the `users` table and `create` one `data` object for a new `email` and `password`. `await` the client and save the results in a variable. `console.log` the results.
12. Run `create.js` and make sure it runs without errors.
13. In `create.js`, add 4 more calls to the `prisma` client to create more users with different emails. `console.log` each result.
14. Run `create.js` and make sure it runs without errors.
15. Create the file `read.js`. In that file, add code for the `prisma` client to access the `users` table and `findMany`. Use the `where` object to match the `email` of the first user. `await` the client and save the results in a variable. `console.log` the results.
16. Run `read.js` and make sure it runs without errors. Observe that multiple users have the same `email`. They were created each time `create.js` ran.
17. In `read.js`, add 2 more calls to the `prisma` client to access the `users` table. Use `findFirst` and `findUnique` with `where` objects that attempt to match different combinations of `id`, `email`, or `password`. `await` the client and save the results in a variable. `console.log` each result.
18. Run `read.js` and make sure it runs without errors.
19. Create the file `update.js`. In that file, add code for the `prisma` client to access the `users` table and `update` a user `where` an `id` matches, and use a `data` object to change the `email`. `await` the client and save the results in a variable. `console.log` the results.
20. Run `update.js` and make sure it runs without errors.
21. Create the file `delete.js`. In that file, add code for the `prisma` client to access the `users` table and `delete`. Use the `where` object to match an `email` and `id`. `await` the client and save the results in a variable. `console.log` the results.
22. Run `delete.js` and make sure it runs without errors.
23. In `script.js`, add code for the `prisma` client to access the `users` table and `findMany` to show all users. `await` the client and save the results in a variable. `console.log` the results.
24. Run `script.js` and make sure it runs without errors.
25. In `script.js`, add a `console.log` to display a message that explains how to create, read, update, and delete data with Prisma.
26. Run `script.js` and make sure it runs without errors.

## More Information

- CRUD stands for create, read, update, and delete.
- Use the popup Intellisense menus to get more information about Prisma client methods.
- The Prisma client cannot programmatically create tables, but it can edit data in existing tables.
- `let` can be used to declare a variable without a value. Example: `let myResults;`
- A variable declared with `let` can be reused.
- The file `.env` is used to store confidential information.
- The `.env` is usually listed in `.gitignore`, which means the confidential information will not be copied to the repository.
- If you lose the database password, a new one can be generated. There is a `Reset password` button next to the `Connection string` in Supabase.
- The `PrismaClient` is accessible from the `generated` folder.
- The tables and fields in your Supabase database will be accessible from the `PrismaClient`.
- Prisma version 6, or `prisma@6`, is compatible with more databases than the latest version of Prisma (for now).

## Usage Tips

- In the terminal, run `npm init` in the folder you want to initialize NPM.
- In `package.json`, `type: "module"` allows the use of `import` statements in JavaScript.
- The `dotenv` package is used by Prisma to access values in `.env`.
- The `npx` command runs NPM packages directly in the terminal.
- [Supabase website](https://supabase.com/)
- [Pooler session mode](https://supabase.com/docs/guides/database/connecting-to-postgres#pooler-session-mode)
- [Prisma website](https://www.prisma.io/)

## Hints

- Prisma is one of the many ways to connect to a database, but it can connect to different types of databases.
- Supabase has it's own package, but it only connects to Supabase databases.
- By default, Prisma generates clients in TypeScript.
