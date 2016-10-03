const SQ = require('sequelize');
const db = require ('./store');

const Token = db.define('token',
{
  userId: {
    type: SQ.INTEGER,
    field: 'userID',
    unique: true
  },
  value: {
    type: SQ.STRING(200),
    field: 'body',
    unique: true
  },
  issuedAt: SQ.DATE,
  realm: SQ.STRING(80)
},
{
  tableName: 'Token',
  timestamps: false
});

Token.removeAttribute('id');

module.exports = Token;
