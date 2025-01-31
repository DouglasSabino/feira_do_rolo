const { serviceUser } = require('../services/serviceUser.js');
const {CREATED} = process.env;

const controllerUser = { 
    createUser: async (req, res, next) => {
        /** @type {import('express').RequestParamHandler} */
        try {
          const result = await serviceUser.createUser(req.body);
          return res.status(Number(CREATED)).json({message: "User Registred Sucessfully !!"});
        } catch (error) {
          return next('INVALID_TOKEN');
        }
      },
 }

 module.exports = { controllerUser }