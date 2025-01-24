const clintsApplicationData = require("../models/clintsApplicationData");

exports.singleUserDataController = async (req, res) => {
  try {
    const { emailUser } = req.body;

    const user = await clintsApplicationData.findOne({ email: emailUser });

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    res.status(200).send({ message: "User found.", user });
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).send("Internal server error.");
  }
};
