import { createWebClient } from "./web-client.js";


debugger;
const prisma = await createWebClient({jsonSchema: "json-schema.json"});

const newStudent = await prisma.students.create({
    data: {
        name: "Anna Tarleton",
        level: 4
    }
});

const students = await prisma.students.findMany();

console.log("\n----------New Student----------\n");
console.log(newStudent);
console.log("\n----------Students----------\n");
console.log(students);


console.log(`
============================================================
HOW TO SET UP AND USE THE PRISMA WEB CLIENT
============================================================

1. HIGH-LEVEL ARCHITECTURE
   - The web client bridges Prisma logic into environments where 
     traditional native engines cannot run (like client-side browsers).
   - It relies entirely on a pre-generated JSON structure to dynamically
     reconstruct your models and queries.

2. GENERATION WORKFLOW
   - Schema Engine: Define models in 'prisma/schema.prisma'.
   - Generator Config: Include 'prisma-json-schema-generator' in the schema block.
   - Command: Run 'npx prisma generate' to produce 'json-schema.json'.

3. INTIALIZATION
   - Must be treated as asynchronous: use 'await createWebClient({...})'.
   - Mandatory Option: Pass the 'jsonSchema' key pointing to your generated file.

4. USAGE & LIMITATIONS
   - Mimics the core Prisma API: supports 'create', 'findMany', 'update', etc.
   - Autocomplete is unavailable out of the box because it lacks dynamic TypeScript types.
   - Inspection: Use the Node.js / VS Code Debugger to inspect runtime properties.
============================================================
`);




