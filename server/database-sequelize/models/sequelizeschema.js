const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config');
const sequelize = require("../config");



const User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phoneNumber: Sequelize.STRING
});

// Service model
const Service = sequelize.define('Service', {
  category: Sequelize.STRING,
  companyName: Sequelize.STRING,
  description: Sequelize.STRING,
  costPerDay: Sequelize.FLOAT,
  logo: Sequelize.STRING,
  images: Sequelize.TEXT, // Modify the column type to TEXT
  address: Sequelize.STRING
});


const Rental = sequelize.define('Rental', {

  rentalDate: Sequelize.DATE,
  returnDate: Sequelize.DATE
});

User.hasMany(Rental);
Rental.belongsTo(User);

Service.hasMany(Rental);
Rental.belongsTo(Service);

module.exports={
  Service,Rental,User
}

