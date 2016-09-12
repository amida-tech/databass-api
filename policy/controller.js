const Policy = require('./model');

const PolicyController = {
  showPolicies: (req, res) => {
    Policy.findAll().then(policies => {
      return res.json(policies);
    });
  }
};

module.exports = PolicyController;