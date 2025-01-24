const user = require("../models/generalSignupModal");
exports.getUserDataController = async (req, res) => {
  try {
    const users = await user.find({});

    res.status(201).send({ users });
  } catch (error) {
    res.status(404).send({ message: "Not Found" });
  }
};
//get varified users
const varifiedUser = require("../models/varifiedSignupModal");
exports.getVarifiedUserData = async (req, res) => {
  try {
    const users = await varifiedUser.find({});

    res.status(201).send({ users });
  } catch (error) {
    res.status(404).send({ message: "Not Found" });
  }
};
