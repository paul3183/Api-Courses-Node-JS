const { Sequelize } = require('sequelize'); //traiog el sequelize

const db = new Sequelize({ //para la base de datos crear
  database: 'courses_api',
  username: 'postgres',
  host: 'localhost',
  port: '5433',
  password: '041213',
  dialect: 'postgres',
  logging: false,
});

module.exports = db;