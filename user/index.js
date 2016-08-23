const Token = require('./tokenModel');
const User  = require('./userModel');
const bcrypt = require('bcrypt');

const userController = {
  authenticate: (req, res, next) => {

  },
  signOut: () => {

  },
  createUser: (req, res) => {
    createNewUser(req, res, req.body.email, req.body.password);
  }
};

//TODO: refactor callback hell with co or async/await.

const createNewUser = (req, res, email, password) => {
    User.findOne({where:{email}}).then(data => {
      if (data) {
        res.status(400).send('An existing user has already used that email address.');
      } else {
        User.create({
          email,
          password: bcrypt.hashSync(password, 10),
          admin: false
        }).then(user => {
          res.status(200).send(JSON.stringify({id: user.id, email: user.email}));
        });
      }
    });
};

module.exports = userController;