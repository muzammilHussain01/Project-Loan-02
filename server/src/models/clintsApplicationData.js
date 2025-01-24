const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  desiredLoan: { type: Number, require: true },
  annualIncome: { type: Number, require: true },
  loanPurpose: { type: String, require: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  mobile: { type: Number, require: true },
  address: { type: String, require: true },
  city: { type: String, require: true },
  state: { type: String, require: true },
  postCode: { type: Number, require: true },
  employerFirstName: { type: String, require: true },
  employerLastName: { type: String, require: true },
  occupation: { type: String, require: true },
  experience: { type: Number, require: true },
  monthlyIncome: { type: Number, require: true },
  additionalComments: { type: String, require: true },
  photo: { type: String, require: true },
  documents: { type: String, require: true },
  signature: { type: String, require: true },
});

const clintApplicationData = mongoose.model("clintApplicationData", schema);
module.exports = clintApplicationData;
