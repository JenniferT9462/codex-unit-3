//import prisma client
import { PrismaClient } from "./generated/prisma/client.js";

//initialize a prisma client
const prisma = new PrismaClient();


//create one data object for a new email and password
const data = {
  email: "user5@gmai.com",
  password: "Passwor123!",
};

// add 4 more calls to the prisma client to create more users with different emails.
// const secondUser = {
//     email: "user2@gmai.com",
//     password: "Passwor123!"
// }

// const thirdUser = {
//   email: "user3@gmai.com",
//   password: "Passwor123!",
// };
// const fourthUser = {
//   email: "user4@gmai.com",
//   password: "Passwor123!",
// };
// const fifthUser = {
//   email: "user5@gmai.com",
//   password: "Passwor123!",
// };

// add code for the prisma client to access the users table
const results = await prisma.users.create({ data });
// const results2 = await prisma.users.create({ secondUser });
// const results3 = await prisma.users.create({ thirdUser });
// const results4 = await prisma.users.create({ fourthUser });
// const results5 = await prisma.users.create({ fifthUser });


//console.log each result
console.log(results);
// console.log(results2);
// console.log(results3);
// console.log(results4);
// console.log(results5);

// data: {
//     email: "jennT@gmail.com",
//     password: "H3ll0!",
//   },