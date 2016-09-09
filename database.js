const Sequelize = require('sequelize');
const config    = require('./config');

const db = new Sequelize(config.userdb.name, config.userdb.user, config.userdb.pass, {
  host: config.userdb.host,
  dialect: config.userdb.dialect,
  port: config.userdb.port,
  pool: {
    max: 20,
    min: 0,
    idle: 10000
  }
});

db
  .authenticate()
  .then(function() {
    console.log('Database connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database: ', err);
  });

module.exports = db;
