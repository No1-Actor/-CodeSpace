// shop?
// 大型项目 index.js  入口 
// 每个模块的接口一个文件

// vuex 读 | 写 ("写"不能随便进行修改)
// A   B  _products 需要中央的vuex来统一管理
// -> actions -> mutations(回溯，如记账一样) 
const _products =  [ // _ 代表私有的，只在本模块
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

export default {
    // 阅读后端接口文档，actions 要调研的方法
    getProducts (cb) {
        // 模拟AJAX请求所花的时间
        setTimeout(() => cb(_products), 100)  //cb(callback) 回调函数
    },
  
    buyProducts (products, cb, errorCb) { 
        setTimeout(() => {
            // 抛硬币
            (Math.random() > 0.5 ? cb() : errorCb()) // 50%的概率执行cb()，50%的概率执行errorCb()
        },100)
      }
    }