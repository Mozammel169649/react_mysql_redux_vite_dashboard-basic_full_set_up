'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class suppliers extends Model {
    static associate(models) {
      // define association here
    }
  }
  suppliers.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'suppliers',
  });
  return suppliers;
};