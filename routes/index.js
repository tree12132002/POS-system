const express = require('express')
const router = express.Router()

const orderController = require('../controllers/order-controller')
const settingController = require('../controllers/setting-controller')

// order
router.get('/tables', orderController.getTables)
router.get('/tables/:id', orderController.getOrder)

// setting
// menu
router.get('/setting/create', settingController.createMenu)
router.post('/setting', settingController.postMenu)
router.get('/setting/:id/edit', settingController.editMenu)
router.put('/setting/:id', settingController.putMenu)
router.delete('/setting/:id', settingController.deleteMenu)
// table
router.get('/setting/table', settingController.createTable)
router.post('/setting/table', settingController.postTable)

router.get('/setting', settingController.getSetting)

router.use('/', (req, res) => {
  res.redirect('/tables')
})

module.exports = router
