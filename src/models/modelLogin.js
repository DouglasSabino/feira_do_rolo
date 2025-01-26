const modelLogin = {
    Login: async (user, password) => {
      return `${user} | ${password}`;
    }
}

module.exports = { modelLogin };