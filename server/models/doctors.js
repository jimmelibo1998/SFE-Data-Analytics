const mongoose = require("mongoose");

module.exports = Doctors = mongoose.model(
  "doctors",
  new mongoose.Schema({
    area: {
      type: Schema.Types.ObjectId,
      ref: "area"
    },
    lastName: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    classCode: {
      type: String,
      required: true
    },
    specializationCode: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    registered: {
      type: Boolean,
      required: true
    }
  })
);
