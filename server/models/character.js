'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.Planet = Character.belongsTo(models.Planet, {foreignKey: {name: "planetId", allowNull: false}});
      Character.MovieCharacter = Character.hasMany(models.MovieCharacter, {foreignKey: "characterId"});
    }
  };
  Character.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    height: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    hairColor: {
      allowNull: false,
      type: DataTypes.STRING
    },
    planetId: {
      allowNull: false,
      references: {
        model: {
          tableName: 'Planets',
        },
        key: 'id'
      },
    }
  }, 
  {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};