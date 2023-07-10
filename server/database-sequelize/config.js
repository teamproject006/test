const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('rentService', 'fares', 'f@res1999', {
  host: 'localhost',
  dialect: 'mysql',
});
// const sequelize = new Sequelize('rentService', 'root', 'firemanfireman@@', {
//   host: 'localhost',
//   dialect: 'mysql',
// });



module.exports = sequelize;
