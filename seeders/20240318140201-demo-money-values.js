'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('money_values', [
      {
        treasureId: 100,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 101,
        amt:10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 102,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 103,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 104,
        amt:10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 105,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 106,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 107,
        amt:10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 108,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 109,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 110,
        amt:10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 111,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 112,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 113,
        amt:10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 114,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 115,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 116,
        amt:10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        treasureId: 117,
        amt:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 100,
        amt:20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 101,
        amt:25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 102,
        amt:20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 103,
        amt:25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 107,
        amt:30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 108,
        amt:30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        treasureId: 109,
        amt:30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('money_values', null, {});
  }
};
