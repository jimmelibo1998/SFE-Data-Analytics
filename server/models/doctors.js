const mongoose = require("mongoose");

module.exports = Doctors = mongoose.model(
  "doctors",
  new mongoose.Schema({
    area: {
      type: Schema.Types.ObjectId,
      ref: "area"
    },
    registration: {
      registered: {
        type: Boolean,
        default: false
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      }
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
      type: String
    },
    specializationCode: {
      type: String
    }
  })
);
