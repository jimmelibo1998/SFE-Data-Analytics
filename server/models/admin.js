const mongoose = require("mongoose");

module.exports = Admin = mongoose.model(
  "admins",
  new mongoose.Schema({
    lastName: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    role: {
      type: String
    },
    position: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    picture: {
      type: String
    }
  })
);
