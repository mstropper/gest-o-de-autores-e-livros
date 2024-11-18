const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/errorHandler");
const authRoutes = require("./routes/authRoutes");
const authorRoutes = require("./routes/authorRoutes");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);

app.use(errorHandler);

module.exports = app;
