const VarifiedSignupModal = require("../models/varifiedSignupModal");
exports.varifiedSignupController = async (req, res) => {
  try {
    const { user, message } = req.body;

    const varifiedSignupData = new VarifiedSignupModal({
      message,
      user,
    });
    await varifiedSignupData.save();
    res.status(201).send({ message: "Signup Successful." });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
