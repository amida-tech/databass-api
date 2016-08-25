'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const UserController = require('./user');
const TokenController = require('./token');
const passport   = require('passport');
const auth       = require('./auth');
const BasicStrategy = require('passport-http').BasicStrategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT  = require('passport-jwt').ExtractJwt;
const logger     = require('./logger');
const config     = require('./config');

const app = express();

const jsonParser = bodyParser.json();

const JWTOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('Bearer'),
  secretOrKey: config.jwt.secret
};

passport.use(new BasicStrategy(auth.basicStrategy));
passport.use(new JWTStrategy(JWTOptions, auth.jwtStrategy));

/* Middleware */
app.use(logger);
app.use(jsonParser);
app.use(passport.initialize());
app.use(passport.session());

/* User Routes */
app.post('/api/v1.0/user/create', jsonParser, UserController.createNewUser);
app.get('/api/v1.0/user/token', passport.authenticate('basic', {session: false}), TokenController.create);
app.get('/api/v1.0/user', passport.authenticate('jwt', {session: false}), UserController.showCurrentUser);

app.listen(config.port, function() {
  console.log('Server Started at port 8080');
});
