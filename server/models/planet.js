'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Planet.Character = Planet.hasMany(models.Character, {foreignKey: "planetId"});
      Planet.PlanetClimate = Planet.hasMany(models.PlanetClimate, {foreignKey: "planetId"});
    }
  };
  Planet.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'Planet',
  });
  return Planet;
};