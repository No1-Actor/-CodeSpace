import axios from "axios";
import router from "../router"

// axios.defaults.headers['token'] = localStorage.getItem('token') || ''  // 每次请求携带token
axios.defaults.baseURL = "http://localhost:3000"; // 设置默认请求的url

// 请求拦截
axios.interceptors.request.use(config => { // interceptors 拦截器
  let token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token //  将token放入到 Authorization 这个字段中
  }
  return config
})


// 响应拦截
axios.interceptors.response.use((res) => { 
    if (res.data.code && res.data.code !== 0) { // 逻辑性错误
      return Promise.reject(res.data.error) // 返回错误信息
    }
    
    // 如果状态码是4开头的，就认为用户没有权限
    if (res.data.status >= 400 && res.data.status < 500) { // 程序性错误
      router.push('/login')
      return Promise.reject(res.data)
    }
    return res  // 响应的内容没有问题直接返回
  },
)


export function post(url, body) { // 封装post请求
  return axios.post(url, body)
}