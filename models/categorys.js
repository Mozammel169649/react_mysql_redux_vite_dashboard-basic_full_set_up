'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorys extends Model {
    static associate(models) {
      // define association here
    }
  }
  categorys.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categorys',
  });
  return categorys;
};