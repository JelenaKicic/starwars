'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Characters', [
      {
        name: 'Anakin Skywalker',
        gender: 'male',
        age: 55,
        height: 180,
        hairColor: 'dark',
        planetId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Luke Skywalker',
        gender: 'male',
        age: 25,
        height: 185,
        hairColor: 'light',
        planetId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leia Organa',
        gender: 'female',
        age: 55,
        height: 170,
        hairColor: 'dark',
        planetId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Han Solo',
        gender: 'male',
        age: 59,
        height: 190,
        hairColor: 'light',
        planetId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ben Solo',
        gender: 'male',
        age: 15,
        height: 175,
        hairColor: 'light',
        planetId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Padmé Amidala Naberrie',
        gender: 'female',
        age: 50,
        height: 165,
        hairColor: 'dark',
        planetId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jobal Naberrie',
        gender: 'female',
        age: 70,
        height: 155,
        hairColor: 'dark',
        planetId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pooja Naberrie',
        gender: 'female',
        age: 28,
        height: 155,
        hairColor: 'dark',
        planetId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ruwee Naberrie',
        gender: 'male',
        age: 80,
        height: 175,
        hairColor: 'dark',
        planetId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Characters', null, {});
  }
};
