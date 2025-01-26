require('dotenv').config();
const { OK } = process.env;
const { serviceLogin } = require('../services/serviceLogin.js');

const controllerLogin = {

Login: async (req, res, _next) => {
  const {body} = req;

  /** @type {import('express').RequestParamHandler} */
  try {
    const result = await serviceLogin.Login(body);
    return res.status(Number(OK)).json(result);
  } catch (error) {
    console.log(error);
    return error
  }
}

}

module.exports = {controllerLogin};