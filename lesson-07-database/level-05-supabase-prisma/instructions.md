# Supabase and Prisma

## Objective

Create a Supabase account, create a database, and connect to it.

## Benefits

Being able to store and access your own data programmatically will help make your website more dynamic.

## Complete these tasks

1. Create an account or login to `https://supabase.com/`. GitHub login is ok.
2. In your new account, create a new project database `codex-unit-3`. You will need to create (or generate) a database password. It'll be needed later, so copy and paste it somewhere temporarily. The other default settings are ok.
3. In the sidebar, select `Table Editor` → click on `New table`
4. Create a table named `subjects`.
5. Click on `Add column`. Change `column_name` to `name`. Change `column_type` to `text`. Default settings are ok. This will store the names of subjects.
6. Click on `Add column`. Change `column_name` to `description`. Change `column_type` to `text`. The other default settings are ok. This will store the descriptions of subjects.
7. Click on `Save`.
8. Make sure the `subjects` table is selected in the side panel.
9. Click on `Insert` → `Insert row` to add a subject.
10. Enter a `name` and `description` for a subject. Click on `Save`. The other default settings are ok.
11. Insert more subjects until there are at least 5 subjects. Click on `Save`.
12. Click on the `Connect` button at the top. Select `Direct` → select `Session pooler`.
13. Copy the `Connection string`.
14. In the terminal, navigate to this level folder, use `npm` to initialize a project, and set the `type` to `module`. The other default settings are ok.
15. Install these packages - `prisma@6` and `dotenv`.
16. Initialize Prisma in the terminal - `npx prisma init`
17. Observe that these files were generated - `prisma.config.ts`, `prisma/schema.prisma`, `.gitignore`, and `.env`.
18. In `schema.prisma`, change the `provider` to `prisma-client-js`. This will generate a client for JavaScript.
19. In `.env`, replace the string for `DATABASE_URL` with the `Connection string` that you copied from Supabase `Session pooler`.
20. In the connection string, replace `[YOUR-PASSWORD]` with the database password you created (or generated).
21. Synchronize Prisma with your database - `npx prisma db pull`
22. Generate a client to connect to your database - `npx prisma generate`.
23. Observe that the `generated` folder is created and contains the client, and `@prisma/client` is automatically installed and added to `package.json`.
24. In `script.js`, import the client - `import { PrismaClient } from "./generated/prisma/client.js";`
25. Then create a client that connects to your database - `const prisma = new PrismaClient();`
26. Then get data from your `subjects` table - `const results = await prisma.subjects.findMany();`
27. Use `console.log` to view the `results`.
28. Add a `console.log` to display a message.
29. Let the messaage explain how to create a Supabase database and how to connect to it with Prisma.

## More Information

- The file `.env` is used to store confidential information.
- The `.env` is usually listed in `.gitignore`, which means the confidential information will not be copied to the repository.
- If you lose the database password, a new one can be generated. There is a `Reset password` button next to the `Connection string` in Supabase.
- The `PrismaClient` is accessible from the `generated` folder.
- The tables and fields in your Supabase database will be accessible from the `PrismaClient`.
- Prisma version 6, or `prisma@6`, is compatible with more databases than the latest version of Prisma (for now).
- [Supabase website](https://supabase.com/)
- [Pooler session mode](https://supabase.com/docs/guides/database/connecting-to-postgres#pooler-session-mode)
- [Prisma website](https://www.prisma.io/)

## Usage Tips

- In the terminal, run `npm init` in the folder you want to initialize NPM.
- In `package.json`, `type: "module"` allows the use of `import` statements in JavaScript.
- The `dotenv` package is used by Prisma to access values in `.env`.
- The `npx` command runs NPM packages directly in the terminal.

## Hints

- Prisma is one of the many ways to connect to a database, but it can connect to different types of databases.
- Supabase has it's own package, but it only connects to Supabase databases.
- By default, Prisma generates clients in TypeScript.
