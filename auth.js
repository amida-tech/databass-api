const jwt = require('jsonwebtoken');
const User = require('./user/userModel');
const bcrypt = require('bcrypt');

module.exports = {
  basicStrategy: function(email, password, done) {
    User.findOne({where: {email}}).then(user => {
      console.log('this was executed');
      if (!user) { return done(null, false); }
      if (user && bcrypt.compareSync(password, user.password)) {
        console.log('this was executed inside user');
        return done(null, user)
      } else {
        return done(null, false);
      }
    });
  },
  jwtStrategy: function() {

  }
};