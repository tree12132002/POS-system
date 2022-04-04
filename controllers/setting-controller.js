const { Menu } = require('../models')

const settingController = {
  getSetting: (req, res, next) => {
    // return res.render('setting')
    Menu.findAll({
      raw: true
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
    return Menu.findByPk(req.params.id)
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
  }
}

module.exports = settingController
