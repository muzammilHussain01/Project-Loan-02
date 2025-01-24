const GeneralSignupData = require("../models/generalSignupModal");
exports.deleteUserController = async (req, res) => {
  try {
    const email = req.body.email;
    console.log(email);

    const user = await GeneralSignupData.findOneAndDelete({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    res.status(201).send({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).send("Internal serverer ror.");
  }
};
