import axios from 'axios'
// fetch xhr vue应用时候, 复用, 统一管理
// 所有的请求前面加上baseURL 地址
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 10*1000; // 超时时间
axios.defaults.maxBodyLength = 5*1024*1024 // 限制返回数据大小

const http = {
    get(url, params = {}) {
        // 封装promise
        return new Promise((resolve, reject) => {
            axios.get(url, {params})
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
        })
    }
}

export default http; // 导出模块