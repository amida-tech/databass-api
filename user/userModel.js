import SQ from 'Sequelize';
import database from './database';

const User = database.define('user', {
  email: SQ.STRING(255),
  password: SQ.STRING(255),
  admin: SQ.BOOLEAN
  }, {
    timestamps: false
  });

export default User;