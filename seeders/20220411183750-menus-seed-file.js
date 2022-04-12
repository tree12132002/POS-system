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
    await queryInterface.bulkInsert('Menus', [{
      id: 1,
      name: '原味章魚燒',
      price: 130,
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 2,
      name: '柚香蔥花章魚燒',
      price: 150,
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 3,
      name: '雞蛋沙拉章魚燒',
      price: 150,
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 4,
      name: '起司明太子章魚燒',
      price: 150,
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 5,
      name: '銀炒麵',
      price: 130,
      category_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 6,
      name: '大阪蛋炒麵',
      price: 160,
      category_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 7,
      name: '蕃茄切片',
      price: 100,
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 8,
      name: '泡菜',
      price: 100,
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 9,
      name: '芝麻小黃瓜',
      price: 100,
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 10,
      name: '毛豆',
      price: 100,
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 11,
      name: '凱薩沙拉',
      price: 180,
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 12,
      name: '鹽麴碳烤雞肉',
      price: 100,
      category_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 13,
      name: '酒蒸海瓜子',
      price: 190,
      category_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 14,
      name: '厚切培根',
      price: 180,
      category_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 15,
      name: '蒜炒蝦仁',
      price: 190,
      category_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 16,
      name: '起司蛋捲',
      price: 170,
      category_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 17,
      name: '味噌風味炙燒豬',
      price: 190,
      category_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 18,
      name: '炸雞',
      price: 190,
      category_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 19,
      name: '厚切火腿',
      price: 190,
      category_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 20,
      name: '串燒豬肉',
      price: 150,
      category_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 21,
      name: '炸薯條',
      price: 160,
      category_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 22,
      name: '炸竹莢魚',
      price: 140,
      category_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 23,
      name: '炸章魚',
      price: 190,
      category_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 24,
      name: '金賓High Ball',
      price: 110,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 25,
      name: '角High',
      price: 120,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 26,
      name: '可樂High Ball',
      price: 160,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 27,
      name: '香橙High Ball',
      price: 160,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 28,
      name: '葡萄柚High Ball',
      price: 160,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 29,
      name: '紫蘇梅High Ball',
      price: 160,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 30,
      name: '三得利頂級生啤酒',
      price: 120,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 31,
      name: '烏龍High',
      price: 160,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 32,
      name: '可爾必思沙瓦',
      price: 160,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 33,
      name: '葡萄柚沙瓦',
      price: 160,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 34,
      name: '黑丸',
      price: 160,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 35,
      name: '大麥燒酒',
      price: 160,
      category_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 36,
      name: '烏龍茶',
      price: 100,
      category_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 37,
      name: '可樂',
      price: 100,
      category_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 38,
      name: '可爾必思',
      price: 100,
      category_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 39,
      name: '柳橙汁',
      price: 100,
      category_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 40,
      name: '葡萄柚汁',
      price: 100,
      category_id: 7,
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
    return queryInterface.bulkDelete('Menus', null, {})
  }
}
