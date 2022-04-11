const {
  Menu,
  Table,
  Orderlist,
  Category
} = require('../models')
const moment = require('moment')

const settingController = {
  getSetting: (req, res, next) => {
    Menu.findAll({
      raw: true,
      nest: true,
      include: [Category]
    })
      .then(menus =>
        res.render('setting', { menus }))
      .catch(err => next(err))
  },
  createMenu: (req, res) => {
    return res.render('create-menu')
  },
  postMenu: (req, res, next) => {
    const { name, price } = req.body

    if (!name || !price) {
      return res.redirect('back')
    }
    Menu.create({
      name,
      price
    })
      .then(() => {
        res.redirect('/setting/menu')
      })
      .catch(err => next(err))
  },
  editMenu: (req, res, next) => {
    Menu.findByPk(req.params.id, { raw: true })
      .then(menu => {
        if (!menu) {
          return res.redirect('back')
        }
        res.render('edit-menu', { menu })
      })
      .catch(err => next(err))
  },
  putMenu: (req, res, next) => {
    const { name, price } = req.body
    if (!name || !price) {
      return res.redirect('back')
    }
    Menu.findByPk(req.params.id)
      .then(menu => {
        if (!menu) {
          return res.redirect('back')
        }
        return menu.update({
          name,
          price
        })
      })
      .then(() => {
        res.redirect('/setting/menu')
      })
      .catch(err => next(err))
  },
  deleteMenu: (req, res, next) => {
    Menu.findByPk(req.params.id)
      .then(menu => {
        if (!menu) {
          return res.redirect('back')
        }
        return menu.destroy()
      })
      .then(() => {
        res.redirect('/setting/menu')
      })
      .catch(err => next(err))
  },
  getTable: (req, res, next) => {
    Promise.all([
      Table.findAll({
        raw: true,
        nest: true
      }),
      req.params.id ? Table.findByPk(req.params.id, { raw: true }) : null
    ])
      .then(([tables, table]) => {
        return res.render('table', { tables, table })
      })
      .catch(err => next(err))
  },
  postTable: (req, res, next) => {
    const { name } = req.body

    if (!name) {
      return res.redirect('back')
    }
    Table.create({
      name
    })
      .then(() => {
        res.redirect('/setting/table')
      })
      .catch(err => next(err))
  },
  putTable: (req, res, next) => {
    const { name } = req.body

    if (!name) {
      return res.redirect('back')
    }
    Table.findByPk(req.params.id)
      .then(table => {
        if (!table) {
          return res.redirect('back')
        }
        return table.update({ name })
      })
      .then(() =>
        res.redirect('/setting/table')
      )
      .catch(err => next(err))
  },
  deleteTable: (req, res, next) => {
    Table.findByPk(req.params.id)
      .then(table => {
        if (!table) {
          return res.redirect('back')
        }
        return table.destroy()
      })
      .then(() => {
        res.redirect('/setting/table')
      })
      .catch(err => next(err))
  },
  getOrderlists: (req, res, next) => {
    Orderlist.findAll({
      raw: true,
      nest: true
    })
      .then(orderlists => {
        orderlists.forEach(orderlist => {
          orderlist.createdAt = moment(orderlist.createdAt).format('YYYY-MM-DD-h:mm:ss')
        })
        return res.render('orderlists', { orderlists })
      })
      .catch(err => next(err))
  },
  getOrderlist: (req, res, next) => {
    Orderlist.findByPk(req.params.id)
      .then(orderlist => {
        orderlist = {
          ...orderlist.toJSON()
        }
        orderlist.createdAt = moment(orderlist.createdAt).format('YYYY-MM-DD-h:mm:ss')

        const items = orderlist.orderedItems.split(',')

        return res.render('orderlist', { orderlist, items })
      })
      .catch(err => next(err))
  },
  deleteOrderlist: (req, res, next) => {
    Orderlist.findByPk(req.params.id)
      .then(orderlist => {
        if (!orderlist) {
          return res.redirect('back')
        }
        return orderlist.destroy()
      })
      .then(() => {
        res.redirect('/setting/orderlists')
      })
      .catch(err => next(err))
  },
  getCategories: (req, res, next) => {
    Promise.all([
      Category.findAll({
        raw: true,
        nest: true
      }),
      req.params.id ? Category.findByPk(req.params.id, { raw: true }) : null
    ])
      .then(([categories, category]) => {
        return res.render('categories', { categories, category })
      })
      .catch(err => next(err))
  }
}

module.exports = settingController
