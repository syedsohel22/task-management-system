const express = require("express");
const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  //logic
  const { full_name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.json({ error: err.message });
      } else {
        const user = new UserModel({
          full_name,
          email,
          password: hash,
        });
        await user.save();
      }
    });
    res.json({ msg: "user has been registered" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  //login
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign(
            { userID: user._id, user: user.full_name },
            "settyl"
          );
          res.status(200).json({ mag: "Logged In Successful.", token });
        } else {
          res.json({ error: "wrong email or passsword" });
        }
      });
    } else {
      res.json({ msg: "user does not exits..!" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = {
  userRouter,
};
