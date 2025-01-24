const mongoose = require("mongoose");
const validator = require("validator");
const generalSignupSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  middleName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "Invalid email formate..",
    },
  },
  reEnterEmail: { type: String, require: true },
  password: { type: String, require: true },
  dob: { type: String, required: true },
  department: { type: String, require: true },
});
const GeneralSignupData = mongoose.model(
  "GeneralSignupData",
  generalSignupSchema
);
module.exports = GeneralSignupData;
