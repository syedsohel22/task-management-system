const express = require("express");
const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

userRouter.post("register", (req, res) => {
  //logic
});

userRouter.post("login", (req, res) => {
  //login
});

module.exports = {
  userRouter,
};
