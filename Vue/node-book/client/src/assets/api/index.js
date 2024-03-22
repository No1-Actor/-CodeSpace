import axios from 'axios';
import { showFailToast, showSuccessToast} from 'vant';

axios.defaults.baseURL = 'http://localhost:3000'  
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截
axios.interceptors.request.use((config) => {
    let jwtToken = window.localStorage.getItem('jwtToken')
    if (jwtToken) {
      // 将token携带在请求头中
      config.headers.Authorization = jwtToken 
    }
    return config
  })

// 响应拦截
axios.interceptors.response.use(res => {  // 响应拦截器（Response Interceptors）
    if(res.status !== 200) { // 程序错误
        showFailToast('服务端异常')
        return Promise.reject(res.data.error)
    } else {
        if(res.data.code !== '8000') { // 逻辑型错误
            showFailToast(res.data.msg)
        if (res.status >= 400 && res.status < 500) {
            router.push('../../views/Login.vue')
            }
            return Promise.reject(res) // 中断请求
        }else{
            // showSuccessToast(res.data.msg) // 成功提示
            return res.data // 返回数据
        }
    }
})

export function post(url, body) {
    return axios.post(BASE_URL+url, body)
}
export default axios;