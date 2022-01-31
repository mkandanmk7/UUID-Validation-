const { uuidSchema } = require("../Schema/schema");

const service = {
  validateEmail(req, res, next) {
    isEmailValid = req.query.email;
    if (isEmailValid === "valid@gmail.com") {
      res.status(200).send("<h2>Email is Valid ...!</h2>");
      next();
    } else {
      throw new Error("validateEmail");
    }
  },
  async uuidValidation(req, res) {
    try {
      console.log("in uuid validation");
      console.log(req.body.uuid);

      const { value, error } = await uuidSchema.validate(req.body);

      console.log("value", value);
      console.log("error", error);
      if (error) res.status(404).send(error.details[0].message);
      else return res.status(200).send("<h2>UUID validated</h2>");
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = service;
