const Policy = require('./model');

const PolicyController = {
  showPolicies: (req, res) => {
    Policy.findAll().then(policies => {
      return res.json(policies);
    });
  },
  getPolicyByNumber: (req, res) => {
    Policy.find(
      { where:
        {
          PolicyNumber: req.params.policyNumber
        }
      }
    )
    .then(policy => {
      return res.json(policy);
    });
  },
  postPolicy: (req, res) => {
    Policy.findOrCreate(
      {
        where:
        {
          PolicyNumber: req.body.PolicyNumber,
          PolicyTitle: req.body.PolicyTitle
        }
      }
    )
    .then(policy => {
      return res.json(policy);
    });
  }
};

module.exports = PolicyController;
