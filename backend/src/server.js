const express = require('express');
const app = express();
const cors = require('cors');
const { routerLogin } = require("./routers/routerLogin.js");
const { routerUser } = require("./routers/routerUser.js");
const { middlewareError } = require('./middlewares/handleError.js');
require('dotenv').config();
const { PORT, OK } = process.env;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use('/', routerLogin);
app.use('/create-user', routerUser);
app.use(middlewareError);

app.get('/', (_req, res) => {
    res.status(Number(OK)).json("Olá Mundo");
});


app.listen(PORT, () => {
  console.log(`Servidor Rodando Na Porta ${PORT}`);
});