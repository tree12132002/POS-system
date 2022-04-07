const { Menu } = require('../models')
const { Table } = require('../models')

const settingController = {
  getSetting: (req, res, next) => {
    // return res.render('setting')
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
      return res.redirect('/setting/create')
    }
    Menu.create({
      name,
      price
    })
      .then(() => {
        res.redirect('setting')
      })
      .catch(err => next(err))
  },
  editMenu: (req, res, next) => {
    Menu.findByPk(req.params.id, { raw: true })
      .then(menu => {
        if (!menu) {
          return res.redirect('/setting/:id/edit')
        }
        res.render('edit-menu', { menu })
      })
      .catch(err => next(err))
  },
  putMenu: (req, res, next) => {
    const { name, price } = req.body
    if (!name || !price) {
      return res.redirect('/setting/:id/edit')
    }
    Menu.findByPk(req.params.id)
      .then(menu => {
        if (!menu) {
          return res.redirect('/setting/:id/edit')
        }
        return menu.update({
          name,
          price
        })
      })
      .then(() => {
        res.redirect('/setting')
      })
      .catch(err => next(err))
  },
  deleteMenu: (req, res, next) => {
    Menu.findByPk(req.params.id)
      .then(menu => {
        if (!menu) {
          return res.redirect('/setting/:id/edit')
        }
        return menu.destroy()
      })
      .then(() => {
        res.redirect('/setting')
      })
      .catch(err => next(err))
  },
  getTable: (req, res, next) => {
    Table.findAll({
      raw: true,
      nest: true
    })
      .then(tables => {
        return res.render('table', { tables })
      })
      .catch(err => next(err))
  },
  createTable: (req, res) => {
    return res.render('create-table')
  },
  postTable: (req, res, next) => {
    const { name } = req.body

    if (!name) {
      return res.redirect('/setting')
    }
    Table.create({
      name
    })
      .then(() => {
        res.redirect('/setting')
      })
      .catch(err => next(err))
  }
}

module.exports = settingController
