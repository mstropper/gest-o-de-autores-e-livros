const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Valida o usuário no banco de dados
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gerar o token JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao realizar login', error: err.message });
  }
};

module.exports = { loginUser };
