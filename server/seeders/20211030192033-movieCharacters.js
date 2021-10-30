'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('MovieCharacters', [
      {
        characterId: 1,
        movieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 1,
        movieId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 1,
        movieId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 1,
        movieId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 1,
        movieId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 1,
        movieId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 2,
        movieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 2,
        movieId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 2,
        movieId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 2,
        movieId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 2,
        movieId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 2,
        movieId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 3,
        movieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 3,
        movieId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 3,
        movieId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 3,
        movieId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 3,
        movieId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 3,
        movieId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 4,
        movieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 4,
        movieId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 4,
        movieId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 4,
        movieId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 4,
        movieId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 4,
        movieId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 5,
        movieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 5,
        movieId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 5,
        movieId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 5,
        movieId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 5,
        movieId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 5,
        movieId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 6,
        movieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 6,
        movieId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 6,
        movieId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 6,
        movieId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 6,
        movieId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 6,
        movieId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 9,
        movieId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 9,
        movieId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 9,
        movieId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 9,
        movieId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 9,
        movieId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 9,
        movieId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 8,
        movieId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 8,
        movieId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 8,
        movieId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 8,
        movieId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 8,
        movieId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 8,
        movieId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 7,
        movieId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 7,
        movieId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 7,
        movieId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 7,
        movieId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 7,
        movieId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        characterId: 7,
        movieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MovieCharacters', null, {});
  }
};
