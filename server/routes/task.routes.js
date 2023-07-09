const express = require("express");
const { taskModel } = require("../models/task.model");
const auth = require("../middleware/auth.middleware");
const taskRouter = express.Router();

// Auth middleware for private Routes
taskRouter.use(auth);

// Read
taskRouter.get("/", async (req, res) => {
  try {
    const tasks = await taskModel.find({ userID: req.body.userID });
    res.send(tasks);
  } catch (err) {
    res.json({ error: err });
  }
});

// Create
taskRouter.post("/create", async (req, res) => {
  try {
    const task = new taskModel(req.body);
    await task.save();
    res.json({ msg: "new task has been added", task: req.body });
  } catch (err) {
    res.json({ error: err });
  }
});

// Update
taskRouter.patch("/update/:taskID", async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { taskID } = req.params;
  try {
    const task = await taskModel.findOne({ _id: taskID });
    const userIDintaskDoc = task.userID;
    // console.log(userIDintaskDoc, userIDinUserDoc);
    if (userIDinUserDoc === userIDintaskDoc) {
      await taskModel.findByIdAndUpdate({ _id: taskID }, req.body);
      res.json({ msg: `${task.title} has been updated.` });
    } else {
      res.json({ msg: "Not Authrized.!" });
    }
  } catch (err) {
    res.json({ error: err });
  }
});

// Delete
taskRouter.delete("/delete/:taskID", async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { taskID } = req.params;
  try {
    const task = await taskModel.findOne({ _id: taskID });
    const userIDintaskDoc = task.userID;
    // console.log(userIDintaskDoc, userIDinUserDoc);
    if (userIDinUserDoc === userIDintaskDoc) {
      await taskModel.findByIdAndDelete({ _id: taskID });
      res.json({ msg: `${task.title} has been deleted.` });
    } else {
      res.json({ msg: "Not Authrized.!" });
    }
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = { taskRouter };
