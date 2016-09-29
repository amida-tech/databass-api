const config = {
  development: {
    db: {
      host: process.env.MPDB_DEVELOPMENT_DB_HOST,
      name: process.env.MPDB_DEVELOPMENT_DB_NAME,
      user: process.env.MPDB_DEVELOPMENT_DB_USER,
      pass: process.env.MPDB_DEVELOPMENT_DB_PASS,
      port: process.env.MPDB_DEVELOPMENT_DB_PORT,
      dialect: process.env.MPDB_DEVELOPMENT_DB_DIALECT
    },
    userdb: {
      host: process.env.MPDB_DEVELOPMENT_UDB_HOST,
      name: process.env.MPDB_DEVELOPMENT_UDB_NAME,
      user: process.env.MPDB_DEVELOPMENT_UDB_USER,
      pass: process.env.MPDB_DEVELOPMENT_UDB_PASS,
      port: process.env.MPDB_DEVELOPMENT_UDB_PORT,
      dialect: process.env.MPDB_DEVELOPMENT_UDB_DIALECT
    },
    jwt: {
      secret: process.env.MPDB_DEVELOPMENT_JWT_SECRET
    },
    port: process.env.MPDB_DEVELOPMENT_APP_PORT
  },
  test: {
    db: {
      host: process.env.MPDB_TEST_DB_HOST,
      name: process.env.MPDB_TEST_DB_NAME,
      user: process.env.MPDB_TEST_DB_USER,
      pass: process.env.MPDB_TEST_DB_PASS,
      port: process.env.MPDB_TEST_DB_PORT,
      dialect: process.env.MPDB_TEST_DB_DIALECT
    },
    userdb: {
      host: process.env.MPDB_TEST_UDB_HOST,
      name: process.env.MPDB_TEST_UDB_NAME,
      user: process.env.MPDB_TEST_UDB_USER,
      pass: process.env.MPDB_TEST_UDB_PASS,
      port: process.env.MPDB_TEST_UDB_PORT,
      dialect: process.env.MPDB_TEST_UDB_DIALECT
    },
    jwt: {
      secret: process.env.MPDB_TEST_JWT_SECRET
    },
    port: process.env.MPDB_TEST_APP_PORT,
    user: {
      email: 'test@amida-tech.com',
      password: 'password'
    }
  }
};

module.exports = config;
