// const express = require("express");
// const generalSignup = require("../controllers/generalSignupController");
// const varifiedSignup = require("../controllers/varifiedSignupController");
// const { login } = require("../controllers/loginController");
// const getQuery = require("../controllers/getQueryController");
// const query = require("../controllers/queryController");
// const getUserData = require("../controllers/getUserDataController");
// const authMiddleware = require("../middleware/authMiddleware");
// // set setClint Applicatio nData
// const {
//   clintApplicationDataController,
// } = require("../controllers/clintApplicationDataController");
// // getting clint data
// const clintData = require("../controllers/getClintApplicationDataController");
// const deleteUserData = require("../controllers/deleteUserController");
// const deleteVarifiedUserData = require("../controllers/deleteVarifiedUserController");
// const singleUserData = require("../controllers/singleUserDataController");
// const logOut = require("../controllers/logOutController");
// const router = express.Router();

// // post roust
// router.post("/generalSignup", generalSignup.generalSignupController);
// router.post("/varifiedSignup", varifiedSignup.varifiedSignupController);
// router.post("/login", login);
// router.post("/query", query.queryController);
// router.post("/setClintApplicationData", clintApplicationDataController);
// //get routs
// router.get("/getUser", getUserData.getUserDataController);
// router.get("/query", getQuery.getQueryController);
// router.get(
//   "/getClintApplicationData",
//   clintData.getClintApplicationDataController
// );
// router.post("/singleUser", singleUserData.singleUserDataController);
// // update/patch rout
// router.patch("/logOut", logOut.logOutController);
// //delete route
// router.delete("/deleteUser", deleteUserData.deleteUserController);
// router.delete(
//   "/deleteVarifiedUser",
//   deleteVarifiedUserData.deleteVarifiedUserController
// );
// module.exports = router;
