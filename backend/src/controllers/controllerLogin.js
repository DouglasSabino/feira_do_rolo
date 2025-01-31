require('dotenv').config();
const { OK } = process.env;
const { serviceLogin } = require('../services/serviceLogin.js');

const controllerLogin = {

Login: async (req, res, next) => {
  /** @type {import('express').RequestParamHandler} */
  try {
    const result = await serviceLogin.Login(req.body);
    return res.status(Number(OK)).json(result);
  } catch (error) {
    return next(error);
  }
},

createUser: async (req, res, next) => {
  /** @type {import('express').RequestParamHandler} */
  try {
    await serviceLogin.createUser(req.body);
  } catch (error) {
    return next(error);
  }
}

}

module.exports = {controllerLogin};

