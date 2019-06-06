import axios from 'axios'
// 全局配置
const axiosDefault = {
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
    // 'access-token': sessionStorage.getItem('access_token') || window.location.href.split('access_token=')[1].split('&')[0]
  },
  withCredentials: false // 当前请求为跨域类型时是否在请求中协带cookie。
}
// 创建axios通用规范
const request = axios.create(axiosDefault)

// 错误处理函数
const err = err => Promise.reject(err)

// http request 请求拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  err
)

// http response 响应拦截器
request.interceptors.response.use(
  response => {
    return response.data
  },
  err
)

export default request
