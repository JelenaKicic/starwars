'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Movies', [
      {
        name: 'Episode IV – A New Hope',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Episode V – The Empire Strikes Back',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Episode VI – Return of the Jedi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Episode I – The Phantom Menace',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Episode II – Attack of the Clones',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Episode III – Revenge of the Sith',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Episode VII – The Force Awakens',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Episode VIII – The Last Jedi',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Episode IX – The Rise of Skywalker',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
