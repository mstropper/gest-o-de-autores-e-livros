// services/bookService.js
const bookRepository = require("../repositories/bookRepository");

async function getBooksByAuthor(authorId) {
  return bookRepository.getBooksByAuthor(authorId);
}

async function createBook(data) {
  return bookRepository.createBook(data);
}

module.exports = {
  getBooksByAuthor,
  createBook
};
