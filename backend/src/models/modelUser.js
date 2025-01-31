const { db } = require('../models/connection.js');

const modelUser = {
  createUser: async ({id, user, hashPassword, salt}) => {
    const SQL_POST_USER = "INSERT INTO users (id, user, hashPassword, salt) VALUES (?,?,?,?)";
    await db.execute(SQL_POST_USER,[id, user, hashPassword, salt]);
   }

}

module.exports = { modelUser };
