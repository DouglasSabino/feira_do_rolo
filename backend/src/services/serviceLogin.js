const { modelLogin } = require('../models/modelLogin.js');
const { makeToken } = require('../utils/makeToken.js');
const bcrypt = require('bcrypt');

const serviceLogin = {
  Login: async (body) => {
    const { username, password } = body;
    const [user] = await modelLogin.Login(username);
    if (user.lenght !== 0) {
      if (bcrypt.hashSync(password, user.salt) === user.hashPassword) {
        const { hash, salt, ...rest } = user;
        console.log(`Salt: ${salt}`);
        const token = makeToken.coder(rest);
        return token;
      }
    }
    return undefined;
  },
}

module.exports = {serviceLogin}