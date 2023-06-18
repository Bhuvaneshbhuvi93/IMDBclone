const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Producer = sequelize.define('Producer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Other'),
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = Producer;
