import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 10 * 1000 // 超时10s
axios.defaults.maxBodyLength = 5 * 1024 * 1024 // 最大请求体5M
axios.defaults.withCredentials = true // 请求携带cookie

// 响应拦截
axios.interceptors.request.use( // 请求拦截
    (response) => response, 
    function(error) { // 请求错误
        return Promise.reject(error) // 返回错误
    }
)

// 定义接口
interface Http {
    // ? 可选 Unknown 
    // 返回值 难点 亮点 tailwind hooks 编程 use typescript
    get<T> (url: string, params?: unknown): Promise<T>
}

const http: Http= {
    get(url, params){
        return new Promise((resolve, reject) => {
            axios
                .get(url, {params})
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    }
}

export default http