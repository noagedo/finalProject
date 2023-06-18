const express = require("express");
const { User } = require("../models/user");
const router = express.Router();

router.post("/api/createUser", async (req, res) => {
    const { email, password, firstname, lastname } = req.body;
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.send("Email already in use");
    }
    const user = new User({
      email,
      password,
      firstname,
      lastname,
    });
    await user.save();
    res.send(user);
  });
  
  exports.createRouter = router;