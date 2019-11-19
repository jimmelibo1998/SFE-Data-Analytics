const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const MedRep = require("../../models/medRep");
const Doctors = require("../../models/doctors");
const Admin = require("../../models/admin");

// @route POST api
router.get("/", (req, res) => {
  res.send("Auth Route");
});

// @route   POST api/auth/medrep
// @desc    Login medrep
// Access   Private
router.post(
  "/medrep",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await MedRep.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ errors: [{ msg: "invalid credentials" }] });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch)
        return res
          .status(400)
          .json({ errors: [{ msg: "invalid credentials" }] });

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   POST api/auth/doctor
// @desc    Login doctor
// Access   Private
router.post(
  "/doctor",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await Doctors.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ errors: [{ msg: "invalid credentials" }] });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.send("Server Error");
    }
  }
);

// @route   POST api/auth/admin
// @desc    Login admin
// Access   Private
router.post(
  "/admin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await Admin.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch)
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.send("Server Error");
    }
  }
);

module.exports = router;
