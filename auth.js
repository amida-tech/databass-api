const User = require('./user/model');
const bcrypt = require('bcrypt');

module.exports = {
  basicStrategy: function(email, password, done) {
    User.findOne({where: {email}}).then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false);
      }
    });
  },
  jwtStrategy: function(jwt_payload, done) {
    console.log(jwt_payload.id);
    User.findOne({where: {id: jwt_payload.id, email: jwt_payload.email}}).then(user => {
      console.log(user);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }
};