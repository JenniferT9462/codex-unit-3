import { PrismaClient } from "./generated/prisma/client.js";
import { createWebClient } from "./web-client.js";

// PrismaClient
const prisma = new PrismaClient();

// READ
const allProducts = await prisma.products.findMany();
console.log("\n---------Products----------\n");
console.log(allProducts);

//CREATE
const newProduct = await prisma.products.create({
  data: {
    name: "HP Laptop",
    price: 1299,
    src: "https://www.shutterstock.com/image-photo/belgrade-serbia-19-july-2023-260nw-2342250165.jpg",
  },
});
console.log("\n----------New Product----------\n");
console.log(newProduct);

//UPDATE
const updateProduct = await prisma.products.update({
  where: {
    id: 3,
  },
  data: {
    price: 5999,
  },
});
console.log("\n----------Updated Product----------\n");
console.log(updateProduct);

//DELETE
// const deleteProduct = await prisma.products.delete({
//   where: {
//     id: 5,
//   },
// });
// console.log("\n----------Deleted Product----------\n");
// console.log(deleteProduct);


// Prisma Web Client
const webClient = await createWebClient({ jsonSchema: "json-schema.json" });
const products = await webClient.products.findMany();
console.log(products);
