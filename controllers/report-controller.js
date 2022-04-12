const { Orderlist } = require('../models')
const { Op } = require("sequelize")

const reportController = {
  postReport: (req, res, next) => {
    const {startTime, endTime} = req.body
    console.log(startTime)
    console.log(endTime)
    Orderlist.findAll({
      where: {
        createdAt: {
          [Op.between]: [startTime, endTime]
        }
      },
      raw: true,
      nest: true
    })
      .then(orderlists => {
        let dailyAmount = 0
        let dailyCustomers = 0

        orderlists.forEach(orderlist => {
          dailyAmount += orderlist.totalPrice
          dailyCustomers += orderlist.peopleAmount
        })

        let averageOrderValue = Math.round(dailyAmount / dailyCustomers)

        return res.render('report', { orderlists, dailyAmount, dailyCustomers, averageOrderValue })
      })
      .catch(err => next(err))
  }
}

module.exports = reportController