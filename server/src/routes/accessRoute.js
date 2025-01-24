const express = require("express");
const grantAcces = require("../controllers/grantAccesController");
const router = express.Router();
router.post("/grantAcces", grantAcces.grantAccesController);
module.exports = router;
