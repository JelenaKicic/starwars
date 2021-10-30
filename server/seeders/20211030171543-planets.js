'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Planets', [
      {
        name: 'Kamino',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Naboo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kashyyyk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jedha',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hoth',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Mustafar',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Jakku',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Scarif',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Tatooine',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Planets', null, {});
  }
};
