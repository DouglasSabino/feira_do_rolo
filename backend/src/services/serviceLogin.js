const { modelLogin } = require('../models/modelLogin.js');
const { serial } = require('../utils/cuid.js');
const bcrypt = require('bcrypt');

const serviceLogin = {
  Login: async (body) => {
    const {user, password} = body;
    const result = await modelLogin.Login(user, password);
    return result;
  },
  createUser: async (body) => {
    const {user, password} = body;
    const id = serial().slice(6,15); 
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = { id, user, hashPassword, salt }
    await modelLogin.createUser(newUser);
  },
}

module.exports = {serviceLogin}