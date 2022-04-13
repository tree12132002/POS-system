const {
  Menu,
  Table,
  Order,
  Orderlist,
  Category,
  Person
} = require('../models')

const orderController = {
  getTables: (req, res, next) => {
    Table.findAll({
      include: [Person],
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
          { model: Order, include: [Menu] },
          { model: Person }
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
    const { tableId, payment } = req.body

    Table.findByPk(tableId, {
      include: [
        { model: Order, include: [Menu] },
        { model: Person }
      ]
    })
      .then(table => {
        table = {
          ...table.toJSON()
        }
        const itemlist = []
        const pricelist = []
        let totalAmount = 0

        table.Orders.forEach(order => {
          itemlist.push(order.Menu.name)
          pricelist.push(order.Menu.price)
          totalAmount += order.Menu.price
        })
        Promise.all([
          Orderlist.create({
            orderedItems: itemlist.toString(),
            orderedPrices: pricelist.toString(),
            totalPrice: totalAmount,
            peopleAmount: table.Person.amount,
            tableId,
            payment
          }),
          Order.destroy({
            where: {
              table_id: tableId
            }
          }),
          Person.destroy({
            where: {
              table_id: tableId
            }
          })
        ])
      })
      .then(() => {
        return res.redirect('/tables')
      })
      .catch(err => next(err))
  },
  postPeople: (req, res, next) => {
    const { tableId, amount } = req.body

    if (!tableId || !amount) {
      return res.redirect
    }
    Person.create({
      tableId,
      amount
    })
      .then(() => {
        return res.redirect('back')
      })
      .catch(err => next(err))
  }
}

module.exports = orderController
