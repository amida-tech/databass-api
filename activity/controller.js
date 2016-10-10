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
  },
  postActivity: (req, res) => {
    Activity
      .create(
        {
          PolicyNumber: req.body.PolicyNumber,
          ActivityDate: req.body.ActivityDate,
          ActivityType: req.body.ActivityType,
          Details: req.body.Details,
          UserID: req.body.UserID
        }
      )
      .then(activity => {
        return res.json(activity);
      });
  }
};

module.exports = ActivityController;
