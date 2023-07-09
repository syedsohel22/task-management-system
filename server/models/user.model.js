const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    full_name: { type: String, required: true },

    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    gender: String,
    city: String,
    age: Number,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
