const { modelLogin } = require('../models/modelLogin.js');

const serviceLogin = {

  Login: async (body) => {
    const {user, password} = body;
    const result = await modelLogin.Login(user, password);
    return result;
  }
}

module.exports = {serviceLogin}