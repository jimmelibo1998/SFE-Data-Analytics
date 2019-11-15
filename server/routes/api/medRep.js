const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const MedRep = require("../../models/medRep");

// @route   POST api/medrep
// @desc    Register medrep
// Access   Private
router.post(
  "/",
  [
    check("lastname", "lastname is required")
      .not()
      .isEmpty(),
    check("firstname", "first name is required")
      .not()
      .isEmpty(),
    check("email", "email is required").isEmail(),
    check(
      "password",
      "please enter a password with 8 or more characters"
    ).isLength({ min: 8 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      lastname,
      firstname,
      email,
      password,
      age,
      gender,
      assignedarea,
      address,
      phonenumber,
      mobile
    } = req.body;

    try {
      // See if medrep exist
      let medrep = await MedRep.findOne({ email });
      if (medrep)
        res.status(400).json({ errors: [{ msg: "Medrep Already Exist" }] });

      medrep = new MedRep({
        lastname,
        firstname,
        email,
        password,
        age,
        gender,
        assignedarea,
        address,
        phonenumber,
        mobile
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      medrep.password = await bcrypt.hash(password, salt);

      await medrep.save();
      res.send("Med Rep Created");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
