'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Orderlists', [{
      id: 1,
      ordered_items: '原味章魚燒,銀炒麵,紫蘇梅High Ball',
      ordered_prices: '130,130,160',
      total_price: 420,
      table_id: 1,
      people_amount: 1,
      payment: '現金',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 2,
      ordered_items: '大阪蛋炒麵,大阪蛋炒麵,金賓High Ball,金賓High Ball',
      ordered_prices: '160,160,110,110',
      total_price: 540,
      table_id: 2,
      people_amount: 2,
      payment: '刷卡',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 3,
      ordered_items: '原味章魚燒,起司明太子章魚燒,起司明太子章魚燒',
      ordered_prices: '130,150,150',
      total_price: 430,
      table_id: 3,
      people_amount: 1,
      payment: '外帶',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 4,
      ordered_items: '原味章魚燒',
      ordered_prices: '130',
      total_price: 130,
      table_id: 4,
      people_amount: 1,
      payment: 'UberEats',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 5,
      ordered_items: '原味章魚燒,柚香蔥花章魚燒,雞蛋沙拉章魚燒,起司明太子章魚燒,銀炒麵,毛豆,厚切培根,炸薯條,可樂High Ball,紫蘇梅High Ball,可爾必思沙瓦,葡萄柚沙瓦',
      ordered_prices: '130,150,150,150,130,100,180,160,160,160,160,160',
      total_price: 1790,
      table_id: 5,
      people_amount: 4,
      payment: '現金',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 6,
      ordered_items: '角High,角High,角High,角High,角High,角High,原味章魚燒,起司明太子章魚燒,大阪蛋炒麵',
      ordered_prices: '120,120,120,120,120,120,130,150,160',
      total_price: 1160,
      table_id: 6,
      people_amount: 3,
      payment: '刷卡',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 7,
      ordered_items: '銀炒麵',
      ordered_prices: '130',
      total_price: 130,
      table_id: 7,
      people_amount: 1,
      payment: '外帶',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 8,
      ordered_items: '雞蛋沙拉章魚燒,起司明太子章魚燒',
      ordered_prices: '150,150',
      total_price: 300,
      table_id: 8,
      people_amount: 1,
      payment: 'UberEats',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 9,
      ordered_items: '烏龍茶,可樂,可爾必思,柳橙汁,葡萄柚汁,泡菜,芝麻小黃瓜,炸章魚,炸竹莢魚,炸雞,酒蒸海瓜子,原味章魚燒,起司蛋捲',
      ordered_prices: '100,100,100,100,100,100,100,190,140,190,190,130,170',
      total_price: 1710,
      table_id: 9,
      people_amount: 5,
      payment: '現金',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 10,
      ordered_items: '原味章魚燒',
      ordered_prices: '130',
      total_price: 130,
      table_id: 10,
      people_amount: 1,
      payment: '刷卡',
      created_at: new Date(),
      updated_at: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Orderlists', null, {})
  }
}
