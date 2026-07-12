//import prisma client
import { PrismaClient } from "./generated/prisma/client.js";

//initialize a prisma client
const prisma = new PrismaClient();

const updateUser = await prisma.users.update({
  where: {
    id: 3n,
  },
  data: {
    email: "jennifer.tarleton@gmail.com",
  },
});

console.log("----------Updated User----------");
console.log("Updated User: ", updateUser);

