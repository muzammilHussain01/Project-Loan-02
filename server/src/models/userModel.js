const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const userSchema = new mongoose.Schema({
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
  tokens: [{ token: { type: String, require: true } }],
});

// JWT token generation
userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

// Password hashing before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const SignupData = mongoose.model("SignupData", userSchema);
module.exports = SignupData;
