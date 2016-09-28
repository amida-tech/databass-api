const Activity = require('./model');

const ActivityController = {
  showActivities: (req, res) => {
    Activity
      .findAll()
      .then(activities => {
        return res.json(activities);
      });
  },
  getActivityByPolicyNumber: (req, res) => {
    Activity
      .findAll(
        {
          where:
          {
            PolicyNumber: req.params.policyNumber
          },
          order: [['ActivityDate', 'DESC']]
        }
      )
      .then(activities => {
        return res.json(activities)
      });
  }
};

module.exports = ActivityController;
