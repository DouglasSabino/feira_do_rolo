const express = require('express');
const { Router } = express;
const { controllerLogin } = require('../controllers/controllerLogin.js');

const routerLogin = Router();

routerLogin.post('/', controllerLogin.Login);

module.exports = {routerLogin}