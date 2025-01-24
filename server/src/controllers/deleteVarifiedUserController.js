const VarifiedSignupModal = require("../models/varifiedSignupModal");
exports.deleteVarifiedUserController = async (req, res) => {
  try {
    const email = req.body.email;
    const useremail = await VarifiedSignupModal.findOne({
      "user.email": email,
    });
    console.log(useremail);

    if (!useremail) {
      return res.status(404).send("User Not Found");
    }
    await VarifiedSignupModal.findOneAndDelete({
      "user.email": useremail.user.email,
    });
    res.status(201).send({ message: "Removed Successfully" });
  } catch (error) {
    res.status(501).send("Internal Server Error ");
  }
};
