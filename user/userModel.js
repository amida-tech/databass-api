const SQ = require('sequelize');
const db = require('./database');
const bcrypt = require('bcrypt');

const User = db.define('user', {
  email: SQ.STRING(255),
  password: SQ.STRING,
  admin: SQ.BOOLEAN
  }, {
    timestamps: false
  });

User.__proto__.verifyPassword = function(password, hash) {
    console.log('this was executed inside verify password');

};

module.exports = User;