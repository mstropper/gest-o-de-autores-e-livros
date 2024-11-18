// routes/bookRoutes.js
const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.getBooks);
router.post("/", bookController.createBook);

module.exports = router;
