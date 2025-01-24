const CustemarQuery = require("../models/queryData");

exports.queryController = async (req, res) => {
  try {
    const { first_name, last_name, mobile, email, purpose, comments } =
      req.body;

    const custemarQuery = new CustemarQuery({
      first_name: first_name,
      last_name: last_name,
      mobile: mobile,
      email: email,
      purpose: purpose,
      comments: comments,
    });
    const token = await custemarQuery.generateSetQueryToken();
    console.log(token);
    if (!token) {
      return res
        .status(201)
        .send({ message: "Query can't saved: You are not authorised !" });
    }
    await custemarQuery.save();

    res.status(201).send({ message: "Query saved successfully !" });
  } catch (error) {
    res.status(500).send("Internal server error !");
  }
};
