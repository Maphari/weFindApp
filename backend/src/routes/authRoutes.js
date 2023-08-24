const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const { username,  email,gender, mobile, password } = req.body;

  try {
    const userData = new User({  username, email, gender, mobile, password });
    await userData.save();

    const token = jwt.sign({ userId: userData._id }, process.env.SECRET_KEY);
    res.send(token);
  } catch (error) {
    return res.status(422).send(error.message);
  }
});
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Please provide email and password" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).send({ error: "Please provide email and password" });
  }

  try {
    await user.comparePassword(password);

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);

    res.send({ token });

  } catch (err) {
    res.status(422).send({ error: "Please provide email and password" });
  }
});

module.exports = router;
