const express = require('express');
const cors = require('cors');
const routesAuth = require('./routes/auth.js'); // Ajuste no caminho
const routesRegister = require('./routes/register.js'); // Ajuste no caminho
const routesLogin = require('./routes/login.js')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Permitir requisição do front-end
app.use(express.json()); // Para lidar com JSON
app.use(express.urlencoded({ extended: true })); // Para lidar com form-urlencoded

app.use('/auth', routesAuth); // Rota de autenticação
app.use('/register', routesRegister.router);
app.use('/login', routesLogin);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
