const Token = require('/model');

const middleware = {
  authenticate: function(req, res, next) {
    const requestToken = req.get('token');
    if (requestToken) {
      Token.findOne({where: {body: req.get('token')}, attributes: ['userId', 'realm']}).then(token => {
        req.user = token.userId;
        req.realm = token.realm;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  }
}
