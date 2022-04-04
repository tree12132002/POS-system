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
    
    // if (!name || !price) {
    //   return redirect('create-menu')
    // }
    Menu.create({
      name,
      price
    })
      .then(() => {
        res.redirect('setting')
      })
      .catch(err => next(err))
  }
}

module.exports = settingController