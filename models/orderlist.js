'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Orderlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Orderlist.init({
    orderedItems: DataTypes.STRING,
    totalPrice: DataTypes.INTEGER,
    orderedPrices: DataTypes.STRING,
    peopleAmount: DataTypes.INTEGER,
    tableId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orderlist',
    tableName: 'Orderlists',
    underscored: true
  })
  return Orderlist
}
