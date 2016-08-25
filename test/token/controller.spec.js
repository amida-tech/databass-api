process.env.NODE_ENV = 'test';

const UserModel = require('../../user/model');
const config    = require('../../config');
const bcrypt    = require('bcrypt');
const request   = require('supertest');

let server;

let user = {
  email: 'test@amida-tech.com',
  password: bcrypt.hashSync('password', 10)
};

describe('Start API', function() {
  beforeEach(function() {
    server = require('../../app').listen(config.port);
    UserModel.create(user);
  });
  afterEach(function() {
    UserModel.destroy({where: {email: user.email}}).then(function(){
        server.close();
      });
  });
  it('Authenticates a user and returns a JWT', function testCreateToken(done) {
    request(server)
      .get('/api/v1.0/user/token')
      .auth(user.email, 'password')
      .expect(200, done);
  });
});