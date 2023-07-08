const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    due_date: { type: String, required: true },
    status: { type: Boolean, required: true },
    assigned_user: { type: String, required: true },
    userID: { type: String, required: true },
    user: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const taskModel = mongoose.model("task", taskSchema);

module.exports = { taskModel };
