const Sequelize = require('sequelize');
const config    = require('./config');

console.log(config.db.dialect);
const database = new Sequelize(config.db.name, config.db.user, config.db.pass, {
  host: config.db.host,
  dialect: config.db.dialect || 'postgres',
  port: config.db.port,
  pool: {
    max: 20,
    min: 0,
    idle: 10000
  }
});

database
  .authenticate()
  .then(function() {
    console.log('Database connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database: ', err);
  });

module.exports = database;
