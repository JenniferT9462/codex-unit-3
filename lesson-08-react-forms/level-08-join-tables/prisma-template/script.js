import { createWebClient } from "./web-client.js";

// Prisma Web Client
const prisma = await createWebClient({ jsonSchema: "json-schema.json" });

// PRODUCTS w/REVIEWS
const allProducts = await prisma.products.findMany({
  include: { reviews: true },
});
console.log("\n----------PRODUCTS w/ Reviews---------\n");
console.log(JSON.stringify(allProducts, null, 2));

// USERS w/REVIEWS
const usersWReviews = await prisma.users.findMany({
  include: { reviews: true },
});
console.log("\n----------USERS w/ Reviews----------\n");
console.log(JSON.stringify(usersWReviews, null, 2));

// REVIEWS w/PRODUCTS & USERS
const allReviews = await prisma.reviews.findMany({
  include: {
    products: true,
    users: true,
  },
});
console.log("\n----------REVIEWS w/ USERS & PRODUCTS----------\n");
console.log(JSON.stringify(allReviews, null, 2));