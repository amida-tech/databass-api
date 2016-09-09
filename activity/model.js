const SQ = require('sequelize');
const ActivityStore = require('./store');

const Activity = ActivityStore.define('activity', {
    PolicyNumber: SQ.STRING,
    ActivityDate: SQ.STRING,
    ActivityType: SQ.STRING,
    Details: SQ.STRING,
    UserID: SQ.STRING
  }, {
    timestamps: false,
    tableName: 'PolicyActivities'
});

Activity.removeAttribute('id');

module.exports = Activity;