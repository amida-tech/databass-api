process.env.NODE_ENV = 'development';

const UserModel     = require('../../user/model');
const ActivityModel = require('../../activity/model');
const config        = require('../../config');
const request       = require('supertest');

let server;
let jwt;
const policyNumber = 'DME101.030';

let testUser = {
  email: 'test@amida-tech.com',
  password: UserModel.hashPassword('password', 10)
}

describe('Starting API Server', function() {
  before(function() {
    server = require('../../app').listen(3008);
  });
  after(function() {
    UserModel.destroy({where: {email: testUser.email}}).then(function(done) {
        server.close();
    });
  });

  it('Creates a user with REST API', function(done) {
    request(server)
      .post('/api/v1.0/user')
      .send({email: testUser.email, password: testUser.password})
      .expect(201, done);
  });

  it('Authenticates a user', function(done) {
    request(server)
      .get('/api/v1.0/user/token')
      .auth(testUser.email, testUser.password)
      .expect(200)
      .end(function(err, res) {
        jwt = res.body.token;
        done();
      });
  })

  it('Returns an array of all policies',
  function(done) {

    request(server)
      .get('/api/v1.0/policies/')
      .set('Authorization', 'Bearer ' + jwt)
      .expect(200, done);
  });

});
