const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const Admin = require("../../models/admin");

router.get("/", (req, res) => {
  res.send("Admin Route");
});

// @route   POST api/admin
// @desc    Register Admin
// Access   Private
router.post(
  "/",
  [
    check("lastName", "lastname is required").exists(),
    check("firstName", "firstname is required").exists(),
    check("email", "email is required").isEmail(),
    check("password", "password must be 8 or more characters").isLength({
      min: 8
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    const { lastName, firstName, role, position, email, password } = req.body;

    try {
      let user = await Admin.findOne({ email });
      if (user)
        return res
          .status(400)
          .json({ errors: [{ msg: "Admin already exists" }] });

      user = new Admin({
        lastName,
        firstName,
        role,
        position,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      res.send("Admin Created");
    } catch (err) {
      console.error(err.message);
      res.send("Server Error");
    }
  }
);

module.exports = router;
