// services/authService.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function loginUser(email, password) {
  // Lógica de autenticação (exemplo)
  const user = { email }; // Aqui você deve consultar o banco para autenticar o usuário
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });

  return { token };
}

module.exports = { loginUser };
