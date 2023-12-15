import http from '@/utils/http'  // @ 表示短链接 src
// 模块，前后端 交流  数据模块封装
// localhost:3000/banner // 轮播图 axios
// 轮播图
export async function getBanner() {
    const { banners } = await http.get('/banner',{type:1})
    return banners
}

// 搜索的
export async function getSearchSuggest(keywords) {
    const { result } = await http.get('/search',{keywords})
    return result
}