const express = require("express");
const task = require("../controllers/taskController");
const assignedTask = require("../controllers/assignedTaskController");
const deleteTask = require("../controllers/deleteTaskController");
const router = express.Router();
router.patch("/task", task.taskController);
router.get("/assignedTask", assignedTask.assignedTaskController);
router.patch("/deleteTask", deleteTask.deleteTaskController);
module.exports = router;
