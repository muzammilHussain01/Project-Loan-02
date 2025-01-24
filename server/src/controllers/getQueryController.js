const CustemarQuery = require("../models/queryData");
exports.getQueryController = async (req, res) => {
  try {
    const queries = await CustemarQuery.find({});
    res.status(200).send(queries);
  } catch (error) {
    res.status(500).send("Internal server error !");
  }
};
