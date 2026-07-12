//import prisma client
import { PrismaClient } from "./generated/prisma/client.js";

//initialize a prisma client
const prisma = new PrismaClient();

const deletedUser = await prisma.users.delete({
    where: {
        id: 1n,
        email: "jennT@gmail.com"
    }
})

console.log("----------Deleted User----------");
console.log("Deleted User: ", deletedUser)