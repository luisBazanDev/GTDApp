const User = require("../models/user");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      let user = await User.findOne({ username });
      if (!user) return done(null, false);

      let isCorrectPassword = bcrypt.compare(password, user.password);
      if (isCorrectPassword === true) return done(null, user);
      else return done(null, false);
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      done(err, userInformation);
    });
  });
};
