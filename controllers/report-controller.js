const { Orderlist } = require('../models')
const { Op } = require('sequelize')

const reportController = {
  postReport: (req, res, next) => {
    const { startTime, endTime } = req.body

    Promise.all([
      Orderlist.findAll({
        where: {
          createdAt: {
            [Op.between]: [startTime, endTime]
          }
        },
        raw: true,
        nest: true
      }),
      Orderlist.findAll({
        where: {
          payment: '現金',
          createdAt: {
            [Op.between]: [startTime, endTime]
          }
        },
        raw: this,
        nest: true
      }),
      Orderlist.findAll({
        where: {
          payment: '刷卡',
          createdAt: {
            [Op.between]: [startTime, endTime]
          }
        },
        raw: this,
        nest: true
      }),
      Orderlist.findAll({
        where: {
          payment: '外帶',
          createdAt: {
            [Op.between]: [startTime, endTime]
          }
        },
        raw: this,
        nest: true
      }),
      Orderlist.findAll({
        where: {
          payment: 'UberEats',
          createdAt: {
            [Op.between]: [startTime, endTime]
          }
        },
        raw: this,
        nest: true
      })
    ])
      .then(([orderlists, orderlistsCash, orderlistsTakeout, orderlistsCard, orderlistsUber]) => {
        let dailyAmount = 0
        let dailyCustomers = 0
        let cashAmount = 0
        let cardAmount = 0
        let takeoutAmount = 0
        let uberAmount = 0

        orderlists.forEach(orderlist => {
          dailyAmount += orderlist.totalPrice
          dailyCustomers += orderlist.peopleAmount
        })
        orderlistsCash.forEach(item => {
          cashAmount += item.totalPrice
        })
        orderlistsCard.forEach(item => {
          cardAmount += item.totalPrice
        })
        orderlistsTakeout.forEach(item => {
          takeoutAmount += item.totalPrice
        })
        orderlistsUber.forEach(item => {
          uberAmount += item.totalPrice
        })

        let averageOrderValue = Math.round(dailyAmount / dailyCustomers)
        let averageTableValue = Math.round(dailyAmount / orderlists.length)

        if (dailyAmount === 0) {
          averageOrderValue = 0
          averageTableValue = 0
        }
        
        return res.render('report', {
          orderlists,
          dailyAmount,
          dailyCustomers,
          averageOrderValue,
          averageTableValue,
          cashAmount,
          cardAmount,
          takeoutAmount,
          uberAmount
        })
      })
      .catch(err => next(err))
  }
}

module.exports = reportController
