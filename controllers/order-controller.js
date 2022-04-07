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
      ]
    })
      .then(table => {
        table = {
          ...table.toJSON()
        }
        let totalAmount = 0

        table.Orders.forEach(order => {
          totalAmount += order.Menu.price
        })
        Menu.findAll({
          raw: true,
          nest: true
        })
          .then(menus => {
            return res.render('order', { menus, table, totalAmount })
          })
      })
      .catch(err => next(err))
  },
  postOrder: (req, res, next) => {
    const { tableId, menuId } = req.body

    if (!tableId || !menuId) {
      return res.redirect('back')
    }
    Order.create({
      tableId,
      menuId
    })
      .then(() => {
        return res.redirect('back')
      })
      .catch(err => next(err))
  },
  deleteOrder: (req, res, next) => {
    const id = req.params.OrdersId

    Order.findByPk(id)
      .then(order => {
        if (!order) {
          return res.redirect('back')
        }
        return order.destroy()
      })
      .then(() => {
        res.redirect('back')
      })
      .catch(err => next(err))
  }
}

module.exports = orderController
