const mongoose = require("mongoose");

module.exports = dcr = mongoose.model(
  "dcr",
  new mongoose.Schema({
    medRep: {
      type: Schema.Types.ObjectId,
      ref: "medrep"
    },
    masterList: {
      type: Schema.Types.ObjectId,
      ref: "masterList",
      required: true
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "doctor"
    },
    date: {
      type: Date,
      default: Date.now
    },
    comment: {
      type: String
    },
    visited: {
      type: Boolean,
      default: false
    },
    point: {
      type: Number,
      required: true
    }
  })
);
