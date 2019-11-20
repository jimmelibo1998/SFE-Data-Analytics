const mongoose = require("mongoose");

module.exports = SfeVisits = mongoose.model(
  "sfe_visits",
  new mongoose.Schema({
    masterList: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "masterlist"
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor"
    },
    weekOne: {
      dates: {
        type: [Date],
        default: []
      },
      score: {
        type: Number,
        default: 0
      }
    },
    weekTwo: {
      dates: {
        type: [Date],
        default: []
      },
      score: {
        type: Number,
        default: 0
      }
    },
    weekThree: {
      dates: {
        type: [Date],
        default: []
      },
      score: {
        type: Number,
        default: 0
      }
    },
    weekFour: {
      dates: {
        type: [Date],
        default: []
      },
      score: {
        type: Number,
        default: 0
      }
    }
  })
);
