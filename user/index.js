const Token = require('./tokenModel');

module.exports = {
  authenticate: function(req, res, next) {
    const requestToken = req.get('token');
    if (requestToken) {
      Token.findOne({where: {body: req.get('token')}, attributes: ['userId', 'realm']}).then((token) => {
        req.user = token.userId;
        req.realm = token.realm;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  },
  getCurrentUser: function(req, res) {
    const currentUser = { userId: req.user, realm: req.realm};
    res.send(JSON.stringify(currentUser));
  }
};
