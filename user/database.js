const Sequelize = require('sequelize');

const db = new Sequelize('MDB_Auth', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
  pool: {
    max: 20,
    min: 0,
    idle: 10000
  }
});

module.exports = db;

