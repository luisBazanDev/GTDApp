const Router = require("express").Router();
const passport = require("passport");
const User = require('../models/user');

Router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    console.log(user)
    if (!user) res.send("User not exits");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

Router.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      if(req.body.username.length < 4) return res.send("Username with few characters")
      if(req.body.password.length < 8) return res.send("Password with few characters")
      const hashedPassword = new User().encryptPassword(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        displayName: req.body.username,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

module.exports = Router;
