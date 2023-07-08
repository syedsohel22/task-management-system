const express = require("express");
const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  //logic
  const { first_name, last_name, email, password, gender, city, age } =
    req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.json({ error: err.message });
      } else {
        const user = new UserModel({
          first_name,
          last_name,
          email,
          password: hash,
          gender,
          city,
          age,
        });
        await user.save();
      }
    });
    res.json({ msg: "user has been registered" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

userRouter.post("/login", (req, res) => {
  //login
});

module.exports = {
  userRouter,
};
