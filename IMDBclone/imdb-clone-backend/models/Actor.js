const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Actor = sequelize.define('Actor', {
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

module.exports = Actor;
