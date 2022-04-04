const express = require('express')
const router = express.Router()

const orderController = require('../controllers/order-controller')

router.get('/tables', orderController.getTables)

router.use('/', (req, res) => {
  res.redirect('/tables')
})

module.exports = router