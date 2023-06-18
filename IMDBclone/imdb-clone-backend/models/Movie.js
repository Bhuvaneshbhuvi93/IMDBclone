const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Movie = sequelize.define('Movie', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year_of_release: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = Movie;
