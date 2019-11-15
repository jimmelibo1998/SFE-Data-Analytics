const mongoose = require("mongoose");

module.exports = callRate = mongoose.model(
  "callRates",
  new mongoose.Schema({
    masterList: {
      type: Schema.Types.ObjectId,
      ref: "masterlist"
    },
    scores: [
      {
        date: {
          type: Date,
          required: true
        },
        doctors: [
          {
            type: Schema.Types.ObjectId,
            ref: "doctor"
          }
        ],
        score: {
          type: Number,
          default: 0
        }
      }
    ]
  })
);
