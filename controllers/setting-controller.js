const { Menu } = require('../models')
const { Table } = require('../models')
const { Orderlist } = require('../models')

const settingController = {
  getSetting: (req, res, next) => {
    Menu.findAll({
      raw: true,
      nest: true
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
      .catch(err =>next(err))
  },
  getOrderlists: (req, res, next) => {
    Orderlist.findAll({
      raw: true,
      nest: true
    })
      .then(orderlists => {
        return res.render('orderlists', { orderlists })
      })
      .catch(err =>next(err))
  }
}

module.exports = settingController
