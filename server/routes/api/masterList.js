const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Master List");
});

module.exports = router;
