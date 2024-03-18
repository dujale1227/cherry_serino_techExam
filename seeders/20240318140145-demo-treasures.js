'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('treasures', [
      {
        id: 100,
        latitude: 14.5437648051331,
        longtitude: 121.019911678311,
        name: 'T1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 101,
        latitude: 14.5532076554883,
        longtitude: 121.055774532421,
        name: 'T2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 102,
        latitude: 14.5446435656183,
        longtitude: 121.020365629871,
        name: 'T3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 103,
        latitude: 14.5872615919051,
        longtitude: 120.979504794655,
        name: 'T4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 104,
        latitude: 14.5732032723718,
        longtitude: 121.023090376156,
        name: 'T5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 105,
        latitude: 14.5231131289849,
        longtitude: 121.019457319516,
        name: 'T6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 106,
        latitude: 14.6024229153284,
        longtitude: 121.011513378939,
        name: 'T7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 107,
        latitude: 14.6085746293116,
        longtitude: 121.018551395794,
        name: 'T8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 108,
        latitude: 14.4911143426092,
        longtitude: 121.043748206197,
        name: 'T9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 109,
        latitude: 14.5445595272478,
        longtitude: 121.106088282234,
        name: 'T10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 110,
        latitude: 14.5879814117365,
        longtitude: 121.058208029763,
        name: 'T11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 111,
        latitude: 14.5488649285797,
        longtitude: 121.03363929755,
        name: 'T12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 112,
        latitude: 14.5371505894201,
        longtitude: 120.990430237915,
        name: 'T13',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 113,
        latitude: 14.5257966600328,
        longtitude: 121.020868844103,
        name: 'T14',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 114,
        latitude: 14.5170998780454,
        longtitude: 120.981002106201,
        name: 'T15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 115,
        latitude: 14.502006871058,
        longtitude: 120.991618127534,
        name: 'T16',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 116,
        latitude: 14.521124409049,
        longtitude: 121.042771368704,
        name: 'T17',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 117,
        latitude: 14.4772076562187,
        longtitude: 120.986792724064,
        name: 'T18',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('treasures', null, {});
  }
};
