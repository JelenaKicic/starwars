'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieCharacter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MovieCharacter.Movie = MovieCharacter.belongsTo(models.Movie, {foreignKey: {name: "movieId", allowNull: false}});
      MovieCharacter.Character = MovieCharacter.belongsTo(models.Character, {foreignKey: {name: "characterId", allowNull: false}});
    }
  };
  MovieCharacter.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    characterId: {
      allowNull: false,
      references: {
        model: {
          tableName: 'Characters',
        },
        key: 'id'
      },
      type: DataTypes.INTEGER
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
    }
  }, {
    sequelize,
    modelName: 'MovieCharacter',
  });
  return MovieCharacter;
};