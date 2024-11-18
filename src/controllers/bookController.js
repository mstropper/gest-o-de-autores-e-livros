// src/controllers/bookController.js

const { PrismaClient } = require('@prisma/client'); // Importando o PrismaClient
const prisma = new PrismaClient(); // Instanciando o PrismaClient

// Função para obter todos os livros
const getBooks = async (req, res) => {
  try {
    // Usando findMany para obter todos os livros
    const books = await prisma.book.findMany();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar os livros', error: err.message });
  }
};

// Função para criar um novo livro
const createBook = async (req, res) => {
  const { title, description, authorId } = req.body;

  try {
    // Usando create para criar um novo livro
    const newBook = await prisma.book.create({
      data: {
        title,
        description,
        authorId,
      },
    });

    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar o livro', error: err.message });
  }
};

module.exports = {
  getBooks,
  createBook,
};
