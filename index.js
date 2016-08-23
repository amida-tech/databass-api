'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const User       = require('./user');
const passport   = require('passport');

const app        = express();
const jsonParser = bodyParser.json();


/* Routes */
app.get('/api/v1.0/user', jsonParser, User.authenticate, User.getCurrentUser);

app.listen(8080, function() {
  console.log('Server Started at port 8080');
});
