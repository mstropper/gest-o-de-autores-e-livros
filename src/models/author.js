// models/author.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Author = prisma.author;

module.exports = Author;
