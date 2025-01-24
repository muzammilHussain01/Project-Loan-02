const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const querySchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  purpose: {
    type: String,
    require: true,
  },
  comments: {
    type: String,
    require: true,
  },
});
querySchema.methods.generateSetQueryToken = async function () {
  try {
    const token = jwt.sign(
      { userId: this._id, username: this.first_name },
      process.env.JWT_Query_SECRET_KEY,
      { expiresIn: "1h" } // Token expires in 1 hour
    );
    return token;
  } catch (error) {
    console.log(error);
  }
};
const CustemarQuery = mongoose.model("custemarQuery", querySchema);
module.exports = CustemarQuery;
