const Activity = require('./model');

const ActivityController = {
  showActivities: (req, res) => {
    Activity
      .findAll()
      .then(activities => {
        return res.json(activities);
      });
  },
  findActivityWithPolicyName: (req, res) => {
    Activity
      .findAll(
        {
          where:
          {
            PolicyNumber: req.params.policyNumber
          }
        }
      )
      .then(activities => {
        return res.json(activities)
      });
  }
};

module.exports = ActivityController;
