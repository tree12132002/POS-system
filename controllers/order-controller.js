const {
  Menu,
  Table,
  Order,
  Orderlist,
  Category
} = require('../models')

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
    const categoryId = Number(req.query.categoryId) || ''

    Promise.all([
      Table.findByPk(req.params.id, {
        include: [
          { model: Order, include: [Menu] }
        ]
      }),
      Category.findAll({
        raw: true,
        nest: true
      }),
      Menu.findAll({
        include: Category,
        where: {
          ...categoryId ? { categoryId } : {}
        },
        raw: true,
        nest: true
      })
    ])
      .then(([table, categories, menus]) => {
        table = {
          ...table.toJSON()
        }
        let totalAmount = 0

        table.Orders.forEach(order => {
          totalAmount += order.Menu.price
        })
        return res.render('order', { table, categories, menus, totalAmount, categoryId })
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
  },
  postCheckout: (req, res, next) => {
    const { tableId } = req.body

    Table.findByPk(tableId, {
      include: [
        { model: Order, include: [Menu] }
      ]
    })
      .then(table => {
        table = {
          ...table.toJSON()
        }
        const items = []
        let totalAmount = 0

        table.Orders.forEach(order => {
          items.push(order.Menu.name)
          totalAmount += order.Menu.price
        })
        Orderlist.create({
          orderedItems: items.toString(),
          totalPrice: totalAmount
        })
        Order.destroy({
          where: {
            table_id: tableId
          }
        })
      })
      .then(() => {
        return res.redirect('/tables')
      })
      .catch(err => next(err))
  }
}

module.exports = orderController
