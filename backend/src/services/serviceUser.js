const { modelUser } = require('../models/modelUser');
const { serial } = require('../utils/cuid.js');
const bcrypt = require('bcrypt');

const serviceUser = {
  createUser: async (body) => {
    const {user, password} = body;
    const id = serial().slice(6,15); 
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = { id, user, hashPassword, salt }
    await modelUser.createUser(newUser);
  },
}

module.exports = { serviceUser }