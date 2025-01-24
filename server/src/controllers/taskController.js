const AssignedTaskData = require("../models/taskModal");

exports.taskController = async (req, res) => {
  try {
    const { customerEmail, status, user, user_email, completedTask } = req.body;
    const customer = customerEmail
      .split(",")
      .filter((email) => email.includes("@"));

    const isUserExist = await AssignedTaskData.findOne({ user_email });

    if (isUserExist) {
      isUserExist.customerEmail = [
        ...new Set([...isUserExist.customerEmail, ...customer]),
      ];
      isUserExist.assignedTask =
        isUserExist.customerEmail.length + customer.length;
      isUserExist.pendingTask =
        isUserExist.assignedTask - isUserExist.completedTask;
      isUserExist.status = status;

      const updatedTask = await isUserExist.save();
      return res.status(200).send({ message: "Task updated", updatedTask });
    } else {
      const AssignedTask = new AssignedTaskData({
        customerEmail: customer,
        status,
        user,
        user_email,
        assignedTask: customer.length,
        pendingTask: customer.length,
        completedTask,
      });

      const newTask = await AssignedTask.save();
      return res.status(201).send({ message: "New task assigned", newTask });
    }
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};
