const controllerLogin = {

Login: async (req, res, next) => {
  /** @type {import('express').RequestParamHandler} */
  try {
    return res.status(200).json('ate o controller');
  } catch (error) {
    return error
  }
}

}

module.exports = {controllerLogin};