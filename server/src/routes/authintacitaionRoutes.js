const express = require("express");
const generalSignup = require("../controllers/generalSignupController"); //"../../controllers/generalSignupController"
const varifiedSignup = require("../controllers/varifiedSignupController");
const userLogin = require("../controllers/loginController");
const router = express.Router();

router.post("/generalSignup", generalSignup.generalSignupController);
router.post("/varifiedSignup", varifiedSignup.varifiedSignupController);
router.post("/login", userLogin.login);

module.exports = router;
