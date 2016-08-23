const Token = require('./tokenModel');
const User  = require('./userModel');
const bcrypt = require('bcrypt');

const userController = {
  authenticate: (req, res, next) => {

  },
  signOut: () => {

  },
  getUser: (req, res) => {

  },
  createUser: (req, res) => {
    createNewUser(res, req.body.email, req.body.password);
  }
};

//TODO: refactor callback hell with co or async/await.

const createNewUser = (res, email, password) => {
    User.findOne({where:{email}}).then(data => {
      if (data) {
        res.status(400).send('An existing user has already used that email address.');
      } else {
        User.create({
          email,
          password: bcrypt.hashSync(password, 10),
          admin: false
        }).then(user => {
          res.status(201).send(JSON.stringify({id: user.id, email: user.email}));
        });
      }
    });
};

module.exports = userController;