const Joi = require("joi");
const { BAD_REQUEST } = process.env;

const schemaUser = {
  validationUser: async (body) => {
    const schema = Joi.object({
      username: Joi.string()
        .min(3)
        .required()
        .messages({
          "string.min": `${BAD_REQUEST}|User must be at least 3 Characters`,
          "string.empty": `${BAD_REQUEST}|Field "username" is mandatory`,
        }),

      password: Joi.string()
        .required()
        .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/)
        .messages({
          "string.pattern.base": `${BAD_REQUEST}|The "password" must be 8 digits, including uppercase, lowercase and numbers`,
          "string.empty": `${BAD_REQUEST}|Field "password" is Mandatory`,
        }),
    });
    await schema.validateAsync(body);
  },
};

module.exports = { schemaUser };