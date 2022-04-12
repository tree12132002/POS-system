'use strict'

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
    await queryInterface.bulkInsert('Tables', [{
      id: 1,
      name: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 2,
      name: 2,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 3,
      name: 3,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 4,
      name: 4,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 5,
      name: 5,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 6,
      name: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 7,
      name: 7,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 8,
      name: 8,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 9,
      name: 9,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 10,
      name: 10,
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
    return queryInterface.bulkDelete('Tables', null, {})
  }
}
