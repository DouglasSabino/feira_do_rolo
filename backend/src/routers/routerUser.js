const express = require('express');
const { Router } = express;
const { controllerUser } = require('../controllers/controllerUser.js');

const routerUser = Router();

routerUser.post('/', controllerUser.createUser);

module.exports = {routerUser}