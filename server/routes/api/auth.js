const express = require("express");
const router = express.Router();

// @route POST api
router.get("/", (req, res) => {
  res.send("Auth Route");
});

module.exports = router;
