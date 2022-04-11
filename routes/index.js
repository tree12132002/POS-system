const express = require('express')
const router = express.Router()

const orderController = require('../controllers/order-controller')
const settingController = require('../controllers/setting-controller')

// order
router.get('/tables', orderController.getTables)
router.get('/tables/:id', orderController.getOrder)
router.post('/tables', orderController.postOrder)
router.delete('/tables/:OrdersId', orderController.deleteOrder)
router.post('/tables/checkout', orderController.postCheckout)

// setting
// menu
router.get('/setting/menu', settingController.getSetting)
router.get('/setting/menu/create', settingController.createMenu)
router.post('/setting/menu', settingController.postMenu)
router.get('/setting/menu/:id/edit', settingController.editMenu)
router.put('/setting/menu/:id', settingController.putMenu)
router.delete('/setting/menu/:id', settingController.deleteMenu)
// table
router.get('/setting/table', settingController.getTable)
router.get('/setting/table/:id', settingController.getTable)
router.post('/setting/table', settingController.postTable)
router.put('/setting/table/:id', settingController.putTable)
router.delete('/setting/table/:id', settingController.deleteTable)
// categories
router.get('/setting/categories', settingController.getCategories)
router.post('/setting/categories', settingController.postCategory)
router.get('/setting/categories/:id', settingController.getCategories)
router.put('/setting/categories/:id', settingController.putCategory)
// orderlist
router.get('/setting/orderlists', settingController.getOrderlists)
router.get('/setting/orderlists/:id', settingController.getOrderlist)
router.delete('/setting/orderlists/:id', settingController.deleteOrderlist)

router.use('/', (req, res) => {
  res.redirect('/tables')
})

module.exports = router
