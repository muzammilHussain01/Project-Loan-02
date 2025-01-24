const ClintsApplicationData = require("../models/clintsApplicationData");
exports.getClintApplicationDataController = async (req, res) => {
  try {
    const clintsApplicationData = await ClintsApplicationData.find({});

    res.status(200).send(clintsApplicationData);
  } catch (error) {
    res.status(404).send({ message: "Page not found..." });
  }
};
