const { Menu } = require('../models')

const orderController = {
  getTables: (req, res) => {
    return res.render('tables')
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
