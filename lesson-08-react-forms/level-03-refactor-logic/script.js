import { createWebClient } from "./web-client.js";

const prisma = await createWebClient({ jsonSchema: "json-schema.json" });

const products = await prisma.products.findMany();
console.log(products);
