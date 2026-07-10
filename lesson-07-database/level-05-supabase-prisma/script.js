import { PrismaClient } from './generated/prisma/client.js';

const prisma = new PrismaClient();

const results = await prisma.subjects.findMany();

console.log(results);
console.log(
  "How to create a Supabase database and how to connect to it with Prisma.",
);