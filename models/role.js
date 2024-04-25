'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    static associate(models) {
      // define association here
    }
  }
  role.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};