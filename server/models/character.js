'use strict';
const {
  Model
} = require('DataTypes');
module.exports = (DataTypes, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.Movie = Character.belongsTo(models.Movie, {foreignKey: {name: "movieId", allowNull: false}});
      Character.Planet = Character.belongsTo(models.Planet, {foreignKey: {name: "planetId", allowNull: false}});
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
    movieId: {
      allowNull: false,
      references: {
        model: {
          tableName: 'Movies',
        },
        key: 'id'
      },
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
    }
  }, 
  {
    DataTypes,
    modelName: 'Character',
  });
  return Character;
};