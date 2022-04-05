const { Menu } = require('../models')
const { Table } = require('../models')

const orderController = {
  getTables: (req, res, next) => {
    Table.findAll({
      raw: true
    })
      .then(tables => {
        return res.render('tables', { tables })
      })
      .catch(err => next(err))
  },
  getOrder: (req, res, next) => {
    // return res.render('order')
    Menu.findAll({
      raw: true
    })
      .then(menus => {
        return res.render('order', { menus })
      })
      .catch(err => next(err))
  }
}

module.exports = orderController
