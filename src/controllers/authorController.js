const authorService = require("../services/authorService");

const createAuthor = async (req, res, next) => {
  try {
    const author = await authorService.createAuthor(req.body);
    res.status(201).json(author);
  } catch (err) {
    next(err);
  }
};

const getAuthors = async (req, res, next) => {
  try {
    // Alterado de authorService.findAll() para authorService.getAllAuthors()
    const authors = await authorService.getAllAuthors();
    res.status(200).json(authors);
  } catch (err) {
    next(err);
  }
};

module.exports = { createAuthor, getAuthors };
