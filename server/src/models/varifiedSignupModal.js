const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const varifiedSignupSchema = new mongoose.Schema({
  message: { type: String, require: true },
  user: {
    firstName: { type: String, require: true },
    middleName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    dob: { type: String, require: true },
    department: { type: String, require: true },
    access: { type: Number, require: true, default: 0 },
  },
});
varifiedSignupSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    console.log(error);
    throw new Error("Token generation failed.");
  }
};
varifiedSignupSchema.pre("save", async function (next) {
  if (this.isModified("user.password")) {
    this.user.password = await bcrypt.hash(this.user.password, 10);
  }
  next();
});
const VarifiedSignupModal = mongoose.model(
  "VarifiedSignupData",
  varifiedSignupSchema
);
module.exports = VarifiedSignupModal;
