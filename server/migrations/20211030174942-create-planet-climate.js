'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PlanetClimates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      planetId: {
        allowNull: false,
        references: {
          model: {
            tableName: 'Planets',
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      climateId: {
        allowNull: false,
        references: {
          model: {
            tableName: 'Climates',
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PlanetClimates');
  }
};