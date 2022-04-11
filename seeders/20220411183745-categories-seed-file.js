'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Categories', [{
      id: 1,
      name: '章魚燒',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 2,
      name: '炒麵',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 3,
      name: '冷菜',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 4,
      name: '煮物',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 5,
      name: '炸物',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 6,
      name: '酒精飲料',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 7,
      name: '軟性飲料',
      created_at: new Date(),
      updated_at: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Categories', null, {})
  }
};
