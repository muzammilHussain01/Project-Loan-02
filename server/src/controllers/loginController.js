const VarifiedSignupModal = require("../models/varifiedSignupModal");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await VarifiedSignupModal.findOne({ "user.email": email });
    if (!userData) {
      return res.status(404).send({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      userData.user.password
    );
    if (!isPasswordValid) {
      return res.status(404).send({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = await userData.generateAuthToken();
    res.status(200).send({ message: "Login Successful.", token, userData });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};
