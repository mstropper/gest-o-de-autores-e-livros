const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllAuthors() {
  try {
    return await prisma.author.findMany();
  } catch (error) {
    throw new Error("Erro ao buscar autores: " + error.message);
  }
}

async function createAuthor(data) {
  try {
    return await prisma.author.create({
      data: data
    });
  } catch (error) {
    throw new Error("Erro ao criar autor: " + error.message);
  }
}

module.exports = {
  getAllAuthors,
  createAuthor
};
