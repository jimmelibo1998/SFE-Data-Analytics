const mongoose = require("mongoose");

module.exports = Doctors = mongoose.model(
  "doctors",
  new mongoose.Schema({
    area: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    registered: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    classCode: {
      type: String,
      required: true
    },
    specializationCode: {
      type: String,
      required: true
    }
  })
);
