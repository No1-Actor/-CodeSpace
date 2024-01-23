import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

// 单一状态树
export default createStore({ // 返回 store 单例对象 
  modules: {
    cart,
    products
  },
  plugins: [createLogger()]
})