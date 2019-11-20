const mongoose = require("mongoose");

module.exports = CallRate = mongoose.model(
  "callRates",
  new mongoose.Schema({
    masterList: {
      type: mongoose.Schema.Types.ObjectId,
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
            doctor: {
                id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "doctors",
                    default: null,
                },
                lastname: {
                    type: String,
                    default: null,
                },
                firstname: {
                    type: String,
                    default: null
                }
            }
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
