const { serviceUser } = require('../services/serviceUser.js');

const controllerUser = { 
    createUser: async (req, res, next) => {
        /** @type {import('express').RequestParamHandler} */
        try {
          const result = await serviceUser.createUser(req.body);
          return res.status(Number(OK)).json(result);
        } catch (error) {
          return next(error);
        }
      },
 }

 module.exports = { controllerUser }