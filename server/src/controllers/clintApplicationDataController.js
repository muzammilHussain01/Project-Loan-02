const clintApplicationData = require("../models/clintsApplicationData");
exports.clintApplicationDataController = async (req, res) => {
  const {
    desiredLoan,
    annualIncome,
    loanPurpose,
    firstName,
    lastName,
    email,
    mobile,
    address,
    city,
    state,
    postCode,
    employerFirstName,
    employerLastName,
    occupation,
    experience,
    monthlyIncome,
    additionalComments,
    photo,
    signature,
    documents,
  } = req.body;
  //   console.log(req.body);
  const applicationData = new clintApplicationData({
    desiredLoan,
    annualIncome,
    loanPurpose,
    firstName,
    lastName,
    email,
    mobile,
    address,
    city,
    state,
    postCode,
    employerFirstName,
    employerLastName,
    occupation,
    experience,
    monthlyIncome,
    additionalComments,
    photo,
    signature,
    documents,
  });
  await applicationData.save();
  res.status(201).send({ message: "Data saved successfully.." });
};
