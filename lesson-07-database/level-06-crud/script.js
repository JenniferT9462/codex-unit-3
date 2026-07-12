import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

const results = await prisma.subjects.findMany();
const users = await prisma.users.findMany();

console.log("\n----------Subjects----------\n");
console.log(results);
console.log("\n----------Users----------\n");
console.log(users);

console.log(`
==================================================
PRISMA CRUD OPERATIONS CHEAT SHEET
==================================================

1. CREATE (Insert data)
   Use 'create' with a 'data' object containing the fields.
   Example:
   const newUser = await prisma.user.create({
     data: { email: 'user@example.com', password: 'pwd' }
   });

2. READ (Fetch data)
   - Use 'findMany' to get an array of records matching a condition.
   - Use 'findFirst' to get the first record matching a condition.
   - Use 'findUnique' to look up a record by a unique field (like id or email).
   Example:
   const user = await prisma.user.findUnique({ where: { id: 1 } });

3. UPDATE (Modify data)
   Use 'update' with a unique 'where' filter and a 'data' object for changes.
   Example:
   const updatedUser = await prisma.user.update({
     where: { id: 1 },
     data: { email: 'new@example.com' }
   });

4. DELETE (Remove data)
   Use 'delete' with a unique 'where' filter to remove a single record.
   Example:
   const deletedUser = await prisma.user.delete({
     where: { id: 1 }
   });

==================================================
`);
