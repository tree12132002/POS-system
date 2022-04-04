const express = require('express')
const router = express.Router()

const orderController = require('../controllers/order-controller')
const settingController = require('../controllers/setting-controller')

router.get('/tables', orderController.getTables)

// setting
router.get('/setting', settingController.getSetting)

router.use('/', (req, res) => {
  res.redirect('/tables')
})

module.exports = router
