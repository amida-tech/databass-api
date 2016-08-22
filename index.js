'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const passport   = require('passport');
const User       = require('./user');

const app        = express();
const jsonParser = bodyParser.json();


/* Routes */
//TODO: Add passport token auth middleware to route once tokenStrategy has something in it.
app.get('/user', jsonParser, User.getCurrentUser);

app.listen(8080, function() {
  console.log('Server Started at port 8080');
});
