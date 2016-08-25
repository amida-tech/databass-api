//
// Import application from app.js
//
const app = require('./app');

//
// Import config from config.js
//
const config = require('./config');

//
// Start an instance of the app on the port specified in the proper
// NODE_ENV config obj.
//
app.listen(config.port, function() {
  console.log('Server started at ', config.port);
});