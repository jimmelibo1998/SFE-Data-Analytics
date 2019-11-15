const mongoose = require("mongoose");

module.exports = Areas = mongoose.model(
  "areas",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    }
  })
);
