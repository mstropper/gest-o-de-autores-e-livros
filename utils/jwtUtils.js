// utils/jwtUtils.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function generateToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
}

module.exports = { generateToken };
