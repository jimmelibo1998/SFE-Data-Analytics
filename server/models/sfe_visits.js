const mongoose = require("mongoose");

module.exports = sfe_visits = mongoose.model(
  "sfe_visits",
  new mongoose.Schema({
    masterList: {
      type: Schema.Types.ObjectId,
      ref: "masterlist"
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "doctor"
    },
    weekOne: {
      dates: {
        type: [Date]
      },
      score: {
        type: Number,
        default: weekOne.dates.length
      }
    },
    weekTwo: {
      dates: {
        type: [Date]
      },
      score: {
        type: Number,
        default: weekTwo.dates.length
      }
    },
    weekThree: {
      dates: {
        type: [Date]
      },
      score: {
        type: Number,
        default: weekThree.dates.length
      }
    },
    weekFour: {
      dates: {
        type: [Date]
      },
      score: {
        type: Number,
        default: weekFour.dates.length
      }
    }
  })
);
