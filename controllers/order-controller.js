const { Menu } = require('../models')
const { Table } = require('../models')
const { Order } = require('../models')

const orderController = {
  getTables: (req, res, next) => {
    Table.findAll({
      raw: true,
      nest: true
    })
      .then(tables => {
        return res.render('tables', { tables })
      })
      .catch(err => next(err))
  },
  getOrder: (req, res, next) => {
    Table.findByPk(req.params.id, {
      include: [
        { model: Order, include: [Menu] }
      ]})
      .then(table => {
        table = {
          ...table.toJSON()
        }
        Menu.findAll({
          raw: true,
          nest: true
        })
          .then(menus => {
            return res.render('order', { menus, table })
          })
      })
      .catch(err => next(err))
  }
}

module.exports = orderController
