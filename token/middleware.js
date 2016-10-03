const Token = require('./model');

const middleware = {
  authenticate: function(req, res, next) {
    const requestToken = req.query.token;
    console.log(requestToken);
    if (requestToken) {
      Token.findOne({where: {body: requestToken}, attributes: ['userId', 'realm']}).then(token => {
        if (token) {
          req.user = token.userId;
          req.realm = token.realm;
          next();
        } else {
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
  }
}

module.exports = middleware;
