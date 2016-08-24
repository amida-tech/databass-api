'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const User       = require('./user');
const passport   = require('passport');
const auth       = require('./auth');
const BasicStrategy = require('passport-http').BasicStrategy;

const app        = express();
const jsonParser = bodyParser.json();



passport.use(new BasicStrategy(auth.basicStrategy));
/* Routes */

//app.get('/api/v1.0/user', jsonParser, User.authenticate, User.getCurrentUser);
app.use(jsonParser);
app.use(passport.initialize());
app.use(passport.session());
app.post('/api/v1.0/user/create', jsonParser, User.createUser);
app.get('/api/v1.0/user/token', passport.authenticate('basic', {session: false}), (req, res) => {
  console.log('this was executed');
  if (req.user) {

    const user = {
      id: req.user.id,
      email: req.user.email,
      admin: req.user.admin
    }; //Delete when we make JWT.

    res.status(200).json(user);
  } else {
    res.send(401);
  }
});

app.listen(8080, function() {
  console.log('Server Started at port 8080');
});
