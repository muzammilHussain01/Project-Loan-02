// generalSignupController
const GeneralSignupData = require("../models/generalSignupModal");
exports.generalSignupController = async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    reEnterEmail,
    password,
    dob,
    department,
  } = req.body;
  // Check for existing user
  const existingUser = await GeneralSignupData.findOne({ email });
  if (existingUser) {
    return res.status(400).send({ message: "Email already registered" });
  }

  // Check if emails match
  if (email !== reEnterEmail) {
    return res.status(400).send({ message: "Emails do not match" });
  }
  const generalSignupData = new GeneralSignupData({
    firstName,
    middleName,
    lastName,
    email,
    password,
    dob,
    department,
  });
  await generalSignupData.save();
  res
    .status(201)
    .send({
      generalSignupData,
      message: "Signup Successfull. Credential sent for verification.",
    });
};
