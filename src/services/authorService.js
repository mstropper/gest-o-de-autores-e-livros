const authorRepository = require("../repositories/authorRepository");

async function getAllAuthors() {
  return authorRepository.getAllAuthors();
}

async function createAuthor(data) {
  return authorRepository.createAuthor(data);
}

module.exports = {
  getAllAuthors,
  createAuthor
};
