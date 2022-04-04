const res = require('express/lib/response')
const { Menu } = require('../models')

const settingController = {
  getSetting: (req, res, next) => {
    // return res.render('setting')
    Menu.findAll({
      raw: true
    })
      .then(menus => res.render('setting'))
      .catch(err => next(err))
  }
}

module.exports = settingController