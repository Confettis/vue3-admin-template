import axios from 'axios'
import config from 'common/config'
import {localGet} from "./storage";
import {ElMessage} from "element-plus";

axios.defaults.baseURL = config[import.meta.env.MODE].baseUrl
axios.defaults.timeout = 20000
/**
 * 请求头
 */
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = `Bearer ${localGet('token')}`
axios.defaults.headers.post['Content-Type'] = 'application/json'    // POST 请求默认形式

/**
 * 前置拦截器
 */
axios.interceptors.request.use(res => {
    /**
     * 根据实际情况做处理
     */
    return res
}, error => {
    return Promise.reject(error)
})

/**
 * 请求拦截器，根据返回值重新组装，统一管理
 */
axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        ElMessage.error('服务端异常~')
        return Promise.reject(res)
    }
    return res.data
}, error => {
    if (error.response.data) {
        const code = error.response.status
        const msg = error.response.data.message
        ElMessage.error(`Code: ${code}, Message: ${msg}`)
        console.error(`[Axios Error] ${error.response}`)
    } else {
        ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
})

export default axios
