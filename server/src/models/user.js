const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = new mongoose.Schema({
   username: {
      type: String,
   },
   displayName: {
      type: String,
   },
   password: {
      type: String,
   },
   email: {
      type: String,
   },
});

// functions to encryp and compare passwords
User.methods.encryptPassword = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

User.methods.validPassword = function(password) {
   return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', User);