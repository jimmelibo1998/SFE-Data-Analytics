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
      unique: true,
      default: null
    },
    registered: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      default: null // IM HERE
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
