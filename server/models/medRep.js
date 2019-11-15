const mongoose = require("mongoose");

module.exports = MedRep = mongoose.model(
  "medreps",
  new mongoose.Schema({
    lastname: {
      type: String,
      required: true
    },
    firstname: {
      type: String,
      required: true
    },
    age: {
      type: String
    },
    gender: {
      type: String
    },
    assignedarea: {
      type: String
    },
    address: {
      type: String
    },
    phonenumber: {
      type: String
    },
    mobile: {
      type: String,
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
