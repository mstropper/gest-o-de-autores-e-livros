const { PrismaClient } = require('@prisma/client');  // Importando o PrismaClient
const prisma = new PrismaClient(); // Instanciando o PrismaClient

// Função para obter livros por autor
async function getBooksByAuthor(authorId) {
  try {
    return await prisma.book.findMany({
      where: {
        authorId: authorId
      }
    });
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    throw new Error("Erro ao buscar livros");
  }
}

// Função para criar um livro
async function createBook(data) {
  try {
    return await prisma.book.create({
      data: data
    });
  } catch (error) {
    console.error("Erro ao criar livro:", error);
    throw new Error("Erro ao criar livro");
  }
}

module.exports = {
  getBooksByAuthor,
  createBook
};
