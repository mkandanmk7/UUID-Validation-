const service = require("../Services/email.services");

const router = require("express").Router();

//validate Email

// router.get("/", service.validateEmail);
router.get("/uuid-validate", service.uuidValidation);

module.exports = router;
