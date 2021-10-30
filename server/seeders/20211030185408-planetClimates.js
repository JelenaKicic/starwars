'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PlanetClimates', [
      {
        planetId: 1,
        climateId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planetId: 2,
        climateId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planetId: 3,
        climateId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planetId: 4,
        climateId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        planetId: 5,
        climateId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        planetId: 6,
        climateId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        planetId: 7,
        climateId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        planetId: 8,
        climateId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        planetId: 9,
        climateId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        planetId: 9,
        climateId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PlanetClimates', null, {});
  }
};
