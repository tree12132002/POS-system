const express = require('express')
const router = express.Router()

const orderController = require('../controllers/order-controller')
const settingController = require('../controllers/setting-controller')

router.get('/tables', orderController.getTables)

// setting
router.get('/setting/create', settingController.createMenu)
router.get('/setting/:id/edit', settingController.editMenu)
router.put('/setting/:id', settingController.putMenu)
router.delete('/setting/:id', settingController.deleteMenu)
router.get('/setting', settingController.getSetting)
router.post('/setting', settingController.postMenu)

router.use('/', (req, res) => {
  res.redirect('/tables')
})

module.exports = router
