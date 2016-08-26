# Medical Policy Database
This repository contains a module for the policy review version of Indaba which
enables users to keep track of policy changes in a database-style dashboard.

## Setup & Configuration

1. Clone this repository and `cd` into the repository root directory.
2. Run `npm init` in the root directory to install all node dependencies.
3. Create the `config/config.js` with the contents below and replace the values
   in caps with your own settings. You may also run ENV variables as the values
   for this file ( recommended for production environments ). I recommend having
   separate databases for test and development.
        const config = {
          development: {
            db: {
              host: 'HOST_NAME',
              name: 'DATABASE_NAME',
              user: 'DATABASE_USER',
              pass: 'DATABASE_PASSWORD',
              port: DATABASE_PORT,
              dialect: 'postgres'
            },
            jwt: {
              secret: 'SECRET_KEY' // Random String used for signing JWT.
            },
            port: APPLICATION_PORT
          },
          test: {
            db: {
              host: 'HOST_NAME',
              name: 'DATABASE_NAME',
              user: 'DATABASE_USER',
              pass: 'DATABASE_PASSWORD',
              port: DATABASE_PORT,
              dialect: 'postgres'
            },
            jwt: {
              secret: 'SECRET_KEY' // Random String used for signing JWT.
            },
            port: APPLICATION_PORT
            }
          }
        };

        module.exports = config;
4. Create a development and test database in PostgreSQL that match the values above.
5. Bootstrap the users table in each database by restoring the `db_bootstrap/schema.sql` file with `psql`. e.g. `psql DATABASE_NAME < db_bootstrap/schema.sql`.
6. To run the application in a development environment, type `npm start` in the root directory.
