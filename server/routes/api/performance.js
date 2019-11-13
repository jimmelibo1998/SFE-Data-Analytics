const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Performance Route");
});

module.exports = router;
