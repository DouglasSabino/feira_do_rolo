const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { PORT } = process.env;
const { routerLogin } = require("./routers/routerLogin.js");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get('/', (_req, res) => {
    res.status(200).json("Olá Mundo");
});

app.get('/login', routerLogin);

app.listen(PORT, () => {
  console.log(`Servidor Rodando Na Porta ${PORT}`);
});