'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express    = require('express');
const cors       = require('cors');
const bodyParser = require('body-parser');
const UserController = require('./user');
const TokenController = require('./token');
const ActivityController = require('./activity');
const PolicyController   = require('./policy');
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

const CORSOptions = {
  origin: "http://localhost:1337"
};

passport.use(new BasicStrategy(auth.basicStrategy));
passport.use(new JWTStrategy(JWTOptions, auth.jwtStrategy));

/* Middleware */
if (process.env.NODE_ENV === 'development') app.use(logger);

app.use(cors(CORSOptions));
app.use(jsonParser);
app.use(passport.initialize());
app.use(passport.session());

//
// User Routes
//
app.post('/api/v1.0/user', jsonParser, UserController.createNewUser);
app.get('/api/v1.0/user/token', passport.authenticate('basic', {session: false}), TokenController.create);
app.get('/api/v1.0/user', passport.authenticate('jwt', {session: false}), UserController.showCurrentUser);
app.get('/api/v1.0/activities/:policyNumber', passport.authenticate('jwt', { session: false }), ActivityController.getActivityByPolicyNumber);
app.get('/api/v1.0/policies', passport.authenticate('jwt', { session: false }), PolicyController.showPolicies);
app.get('/api/v1.0/policies/:policyNumber', passport.authenticate('jwt', { session: false}), PolicyController.getPolicyByNumber);

module.exports = app;
