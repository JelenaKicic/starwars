'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlanetClimate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PlanetClimate.Climate = PlanetClimate.belongsTo(models.Climate, {foreignKey: {name: "climateId", allowNull: false}});
      PlanetClimate.Planet = PlanetClimate.belongsTo(models.Planet, {foreignKey: {name: "planetId", allowNull: false}});
    }
  };
  PlanetClimate.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    planetId: {
      allowNull: false,
      references: {
        model: {
          tableName: 'Planets',
        },
        key: 'id'
      },
      type: DataTypes.INTEGER
    },
    climateId: {
      allowNull: false,
      references: {
        model: {
          tableName: 'Climates',
        },
        key: 'id'
      },
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'PlanetClimate',
  });
  return PlanetClimate;
};