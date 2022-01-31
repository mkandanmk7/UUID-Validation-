const joi = require("joi");

const schema = {
  uuidSchema: joi.object({
    uuid: joi.number().required().min(2).max(8),
  }),
};
module.exports = schema;
