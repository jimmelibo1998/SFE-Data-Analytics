const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");

const auth = require("../../middleware/auth");
const MasterList = require("../../models/masterList");
const SfeVisits = require("../../models/sfe_visits");
const Doctors = require("../../models/doctors");
const CallRate = require("../../models/callRate");

router.get("/", (req, res) => {
  res.send("Master List");
});

// @route   POST api/masterlist
// @desc    Create MasterList
// Access   Private
router.post("/", auth, async (req, res) => {
  try {
    let masterList = new MasterList({
      medRep: req.user.id
    });

    await masterList.save();
    res.json(masterList);
  } catch (err) {
    console.error(err.message);
    res.send("Server Error");
  }
});

// @route   POST api/masterlist/:masterlist/:doctor
// @desc    Create or Update Visits
// Access   Private
router.post("/:masterlist/:doctor", async (req, res) => {
  const { masterlist, doctor } = req.params;
  const { isValid } = mongoose.Types.ObjectId;
  try {
    if (!isValid(masterlist) || !isValid(doctor))
      return res.status(400).send("Ïnvalid Parameter");

    let visit = await SfeVisits.findOne({ masterList: masterlist, doctor });
    if (!visit) {
      let newVisit = new SfeVisits({
        masterList: masterlist,
        doctor
      });

      await newVisit.save();
      res.send("New Visit Created");
      return;
    }

    //Check if doctor is registered or not
    //Call RAte
    //Update Visits
  } catch (err) {
    console.error(err.message);
    res.send("Server Error");
  }
});

module.exports = router;
