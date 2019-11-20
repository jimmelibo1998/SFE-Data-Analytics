const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

module.exports = MasterList = mongoose.model(
  "masterlists",
  new mongoose.Schema({
    medRep: {
      type: ObjectId,
      ref: "medreps",
      required: true
    },
    visits: [
      {
        visit: {
          type: ObjectId,
          ref: "sfe_visits"
        }
      }
    ],
    month: {
      type: Date,
      default: Date.now
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
