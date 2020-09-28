const Sequelize = require('sequelize');

// create the connection to database
const sequelize = new Sequelize('perguntas', 'root', '152189', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize