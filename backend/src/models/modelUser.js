const { modelLogin } = require('../models/modelLogin.js');


const modelUser = {
    createUser: async (user, password) => {
      const user = await modelLogin.Login(user);
      if(user.length != 0) return 
      return "usuario nao existe"
    }

}

module.exports = { modelUser }
