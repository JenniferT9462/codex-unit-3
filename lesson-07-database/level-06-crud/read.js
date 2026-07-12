//import prisma client
import { PrismaClient } from "./generated/prisma/client.js";

//initialize a prisma client
const prisma = new PrismaClient();

const targetEmail = "jennT@gmail.com"

const users = await prisma.users.findMany({
    where: {
        email: targetEmail
    }
});

const firstUser = await prisma.users.findFirst();

console.log("\nUsers with email: 'jennT@gmail.com': ", users);
console.log("\n----------First User----------\n");
console.log("User No.1: ", firstUser)