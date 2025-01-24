const express = require("express");
const {
  clintApplicationDataController,
} = require("../controllers/clintApplicationDataController");
const clintData = require("../controllers/getClintApplicationDataController");
const router = express.Router();

router.post("/setClintApplicationData", clintApplicationDataController);
router.get(
  "/getClintApplicationData",
  clintData.getClintApplicationDataController
);
module.exports = router;
