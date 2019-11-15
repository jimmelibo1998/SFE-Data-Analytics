const mongoose = require("mongoose");

module.exports = medRep = mongoose.model(
  "medreps",
  new mongoose.Schema({
    lastName: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: "area",
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String
    },
    mobile: {
      type: String,
      required: true,
      unique: true
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
  })
);
