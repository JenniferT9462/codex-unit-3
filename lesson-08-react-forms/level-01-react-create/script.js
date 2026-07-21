import { createWebClient } from './web-client.js';

const prisma = await createWebClient({jsonSchema: 'json-schema.json'});



const products = await prisma.products.findMany();
console.log(products)



// const prisma = await createWebClient({jsonSchema: "json-schema.json"});

// const newProduct = await prisma.products.create({
//   data: {
//     name: "Monitor",
//     price: 79.99,
//     src: "https://www.v7world.com/media/catalog/product/cache/a69e5c6ed0f2a06656c53ecccbf3edae/4/9/49___front_466d.png",
//   },
// });
// console.log(newProduct)

