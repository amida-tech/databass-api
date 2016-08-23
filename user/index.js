const Token = require('./tokenModel');
const User  = require('./userModel');

const userController = {
  authenticate: function(req, res, next) {
    const requestToken = req.get('token');
    if (requestToken) {
      Token.findOne({where: {body: req.get('token')}, attributes: ['userId', 'realm']}).then(function(token) {
        req.user = token.userId;
        req.realm = token.realm;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  },
  getCurrentUser: function(req, res) {
    const currentUser = { userId: req.user, realm: req.realm}; // Replace with User.findOne once model has been implmented.
    res.send(JSON.stringify(currentUser));
  }
};


export default userController;