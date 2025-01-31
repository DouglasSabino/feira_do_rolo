const { db } = require('../models/connection.js');

const modelLogin = {
    Login: async (user) => {
     const SQL_GET_USER = 'SELECT * FROM users WHERE user=?';
     const [users] = await db.execute(SQL_GET_USER,[user]);
     return users;
    }
}

module.exports = { modelLogin };