import { get } from "./axios.js";

const getSeller = get('/api/seller') // 网络请求
const getGoods = get('/api/goods') // 网络请求

export { 
    getSeller,
    getGoods
}