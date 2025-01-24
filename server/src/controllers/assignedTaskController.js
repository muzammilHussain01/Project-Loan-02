const AssignedTaskData = require("../models/taskModal");
exports.assignedTaskController = async (req, res) => {
  try {
    const taskDataFromServer = await AssignedTaskData.find({});
    res.status(201).send({ message: "Server error", taskDataFromServer });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};
