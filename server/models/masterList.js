const mongoose = require("mongoose");

module.exports = masterList = mongoose.model(
  "masterlists",
  new mongoose.Schema({
    medRep: {
      type: Schema.Types.ObjectId,
      ref: "medrep",
      required: true
    },
    doctors: [
      {
        doctor: {
          type: Schema.Types.ObjectId,
          ref: "doctor"
        },
        visits: {
          type: Schema.Types.ObjectId,
          ref: "sfe_visit"
        }
      }
    ],
    month: {
      type: Date,
      default: new Date().getMonth()
    },
    callReach: {
      type: Number,
      default: 0
    },
    callFreq: {
      type: Number,
      default: 0
    }
  })
);

//Call Rate is on different model for computation
