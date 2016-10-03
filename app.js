'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express    = require('express');
const cors       = require('cors');
const bodyParser = require('body-parser');
const UserController = require('./user');
const Token = require('./token');
const ActivityController = require('./activity');
const PolicyController   = require('./policy');
//const passport   = require('passport');
//const auth       = require('./auth');
//const BasicStrategy = require('passport-http').BasicStrategy;
//const JWTStrategy = require('passport-jwt').Strategy;
//const ExtractJWT  = require('passport-jwt').ExtractJwt;
const logger     = require('./logger');
const config     = require('./config');

const app = express();

const jsonParser = bodyParser.json();

//const JWTOptions = {
//  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('Bearer'),
//  secretOrKey: config.jwt.secret
//};

const CORSOptions = {
  origin: "http://localhost:1337"
};

//passport.use(new BasicStrategy(auth.basicStrategy));
//passport.use(new JWTStrategy(JWTOptions, auth.jwtStrategy));

/* Middleware */
if (process.env.NODE_ENV === 'development') app.use(logger);

app.use(cors(CORSOptions));
app.use(jsonParser);
//app.use(passport.initialize());
//app.use(passport.session());
console.log(Token.middleware.authenticate);
//
// User Routes
//
//app.post('/api/v1.0/user', jsonParser, UserController.createNewUser);
//app.get('/api/v1.0/user/token', passport.authenticate('basic', {session: false}), TokenController.create);
app.get('/api/v1.0/user', Token.middleware.authenticate, Token.controller.getCurrentUser);
app.get('/api/v1.0/activities/:policyNumber', ActivityController.getActivityByPolicyNumber);
app.get('/api/v1.0/policies', Token.middleware.authenticate, PolicyController.showPolicies);
app.get('/api/v1.0/policies/:policyNumber', Token.middleware.authenticate, PolicyController.getPolicyByNumber);

module.exports = app;
