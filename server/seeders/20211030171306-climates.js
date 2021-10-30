'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Climates', [
      {
        type: 'aquatic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'temperate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'cold',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'frigid',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'hot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'arid',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Climates', null, {});
  }
};
