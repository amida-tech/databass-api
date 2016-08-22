const Token = require('./tokenModel');

module.exports = {
  getCurrentUser: function(req, res) {
    const requestToken = req.get('token');
    if (requestToken) {
      Token.findOne({where: {body: req.get('token')}}).then((token) => {
        res.send(JSON.stringify({userId: token.userId, realm: token.realm}));
      });
    } else {
      res.sendStatus(401);
    }
  }
};
