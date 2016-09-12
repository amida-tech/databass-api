const Activity = require('./model');

const ActivityController = {
  showActivities: (req, res) => {
    Activity.findAll().then(activities => {
      return res.json(activities);
    });
  }
};

module.exports = ActivityController;