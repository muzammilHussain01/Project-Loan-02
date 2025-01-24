const AssignedTaskData = require("../models/taskModal");

exports.deleteTaskController = async (req, res) => {
  try {
    const email = req.body.email; // Extract the index from the request body
    console.log("Index is", email);

    // Check if index is provided
    if (!email) {
      return res.status(400).json({ message: "Task index is required" });
    }

    // Attempt to find and delete the task
    const deletedTask = await AssignedTaskData.findOne({
      customerEmail: email,
    });
    console.log("deletedTask", deletedTask);
    // If no task found, return an error
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Success response
    console.log("Deleted task with index:", deletedTask.customerEmail);
    res
      .status(200)
      .json({ message: "Task deleted successfully", task: deletedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
