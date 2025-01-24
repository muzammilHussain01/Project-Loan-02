const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  customerEmail: {
    type: Array,
    require: true,
  },
  status: { type: String, require: true },
  user: { type: String, require: true },
  user_email: { type: String, require: true },
  assignedTask: { type: Number, default: 0 },
  completedTask: { type: Number, default: 0 },
  pendingTask: { type: Number, default: 0 },
});
const AssignedTaskData = mongoose.model("AssignedTaskData", taskSchema);
module.exports = AssignedTaskData;
