require('dotenv').config();
const { OK } = process.env;
const { serviceLogin } = require('../services/serviceLogin.js');

const controllerLogin = {

  Login: async (req, res, next) => {
    try {
      const token = await serviceLogin.Login(req.body);
      if (token === undefined) return next('USER_NOT_EXIST');
      return res.status(Number(OK)).json(token);
    } catch (error) {
      next(error);
    }
  }

}

module.exports = {controllerLogin};

