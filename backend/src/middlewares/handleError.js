const Joi = require('joi');
const { UNAUTHORIZED, BAD_REQUEST, INTERNAL_SERVER } = process.env;

const knowErros = {
  INVALID_TOKEN: { code: UNAUTHORIZED, message: "please login" },
  DUPLICATE_USER: { code: BAD_REQUEST, message: "username already used" },
  USER_NOT_EXIST: { code: UNAUTHORIZED, message: "invalid credentials" }
};

/** @type {import('express').ErrorRequestHandler} */
const middlewareError = (err, _req, res, _next) => {
  if(Joi.isError(err)) {
    const [code, message] = err.message.split('|');
    return res.status(Number(code)).json(message);
  }

  const error = knowErros[err];
  if(error) return res.status(error.code).json(`${error.message}`);
  return res.status(Number(INTERNAL_SERVER)).json(`Internal Server Error`);
}

module.exports = { middlewareError };