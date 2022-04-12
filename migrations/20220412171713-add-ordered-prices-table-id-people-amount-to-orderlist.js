'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Orderlists', 'people_amount', {
      type: Sequelize.INTEGER,
      allowNull: false,
    })
    await queryInterface.addColumn('Orderlists', 'ordered_prices', {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn('Orderlists', 'table_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Orderlists', 'people_amount')
    await queryInterface.removeColumn('Orderlists', 'ordered_prices')
    await queryInterface.removeColumn('Orderlists', 'table_id')
  }
};
