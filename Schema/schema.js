const joi = require("joi");

const schema = {
  uuidSchema: joi.object({
    uuid: joi.string().required().min(36).max(36),
  }),
};
module.exports = schema;
