const { db } = require('../models/connection.js');

const modelLogin = {
    Login: async (user, password) => {
     const SQL_GET_ALL = 'SELECT * FROM users WHERE username = ? AND password = ?';
     const [users] = await db.execute(SQL_GET_ALL,[user, password]);
     console.log(users);
     return users;
    }
}

module.exports = { modelLogin };