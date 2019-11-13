const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("medical Rep Route");
});

module.exports = router;
