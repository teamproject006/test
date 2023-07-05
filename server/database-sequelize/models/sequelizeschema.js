const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config');
const sequelize = require("../config");



const User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Service model
const Service = sequelize.define('Service', {
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  companyName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  costPerDay: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  logo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  images: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


const Rental = sequelize.define('Rental', {
  rentalDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  returnDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

User.hasMany(Rental);
Rental.belongsTo(User);

Service.hasMany(Rental);
Rental.belongsTo(Service);

module.exports={
  Service,Rental,User
}

