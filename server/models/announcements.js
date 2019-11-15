const mongoose = require("mongoose");

module.exports = announcements = mongoose.model(
  "announcements",
  new mongoose.Schema({
    medRep: {
      type: Schema.Types.ObjectId,
      ref: "medrep"
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    datePosted: {
      type: Date,
      default: Date.now
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    active: {
      type: Boolean,
      default: true
    }
  })
);
