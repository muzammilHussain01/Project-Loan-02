const express = require("express");
const getQuery = require("../controllers/getQueryController");
const query = require("../controllers/queryController");
const router = express.Router();

router.get("/queryData", getQuery.getQueryController);
router.post("/postQuery", query.queryController);

module.exports = router;
