const express = require("express");
const getUserData = require("../controllers/getUserDataController");
const deleteUserData = require("../controllers/deleteUserController");
const deleteVarifiedUserData = require("../controllers/deleteVarifiedUserController");
const singleUserData = require("../controllers/singleUserDataController");
const router = express.Router();

router.get("/getUser", getUserData.getUserDataController);
router.get("/getVarifiedUser", getUserData.getVarifiedUserData);
router.post("/singleUser", singleUserData.singleUserDataController);
router.delete("/deleteUser", deleteUserData.deleteUserController);
router.delete(
  "/deleteVarifiedUser",
  deleteVarifiedUserData.deleteVarifiedUserController
);

module.exports = router;
