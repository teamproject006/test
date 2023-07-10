const { Sequelize, DataTypes } = require ('sequelize');
const sequelize = require('../config');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

const Service = sequelize.define('Service', {
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  companyName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  costPerDay: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  images: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

const Rental = sequelize.define('Rental', {
  rentalDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  returnDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
}, {
  timestamps: false
});

User.hasMany(Rental, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Rental.belongsTo(User);

Service.hasMany(Rental, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Rental.belongsTo(Service);

module.exports = {
  Service,
  Rental,
  User
};
