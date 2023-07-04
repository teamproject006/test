const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('rentService', 'root', 'firemanfireman@@', {
  host: 'localhost',
  dialect: 'mysql',
});



module.exports = sequelize;
