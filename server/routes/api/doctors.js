const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const Doctors = require("../../models/doctors");

router.get("/", (req, res) => {
  res.send("Doctors Route");
});

// @route   POST api/doctors
// @desc    Register Doctor
// Access   Private
router.post(
  "/",
  [
    check("email", "email is required").isEmail(),
    check("password", "password must be greater than or equal to 8 characters"),
    check("lastName", "last name is required").exists(),
    check("firstName", "firstName is required").exists(),
    check("classCode", "Class Code is required").exists(),
    check("specializationCode", "Specialization code is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      area,
      email,
      password,
      lastName,
      firstName,
      classCode,
      specializationCode
    } = req.body;

    try {
      let user = await Doctors.findOne({ email });
      if (user)
        return res
          .status(400)
          .json({ errors: [{ msg: "Doctor Already Exists" }] });

      user = new Doctors({
        area,
        email,
        password,
        lastName,
        firstName,
        classCode,
        specializationCode
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send("Doctor Registered");
    } catch (err) {
      console.error(err.message);
      res.send("Server Error");
    }
  }
);

module.exports = router;
