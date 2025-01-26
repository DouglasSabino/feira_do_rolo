const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { PORT } = process.env;
const { OK } = process.env;
const { routerLogin } = require("./routers/routerLogin.js");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.post('/', routerLogin);

app.get('/', (_req, res) => {
    res.status(Number(OK)).json("Olá Mundo");
});


app.listen(PORT, () => {
  console.log(`Servidor Rodando Na Porta ${PORT}`);
});