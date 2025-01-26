const express = require('express');
const { Router } = express;
const { controllerLogin } = require('../controllers/controllerLogin.js');

const routerLogin = Router();

routerLogin.get('/', controllerLogin.Login);

module.exports = {routerLogin}