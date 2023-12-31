const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    due_date: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    assigned_user: { type: String, required: true },
    userID: { type: String },
    user: { type: String },
  },
  {
    versionKey: false,
  }
);

const taskModel = mongoose.model("task", taskSchema);

module.exports = { taskModel };
