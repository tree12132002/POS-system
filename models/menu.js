'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Menu.hasMany(models.Order, {
        foreignKey: 'menuId'
      })
      Menu.belongsTo(models.Category, {
        foreignKey: 'categoryId'
      })
    }
  }
  Menu.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Menu',
    tableName: 'Menus',
    underscored: true
  })
  return Menu
}
