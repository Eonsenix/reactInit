import request from './axios'

function handleRequest (urlConfig, data, axiosConfig = {}) {
  let dataConfig
  // let newParams = {}
  // newParams = Object.assign({ access_token: sessionStorage.getItem('access_token') }, data)
  let params = {
    // requestHeader: { systemName: '', version: '', modelNumber: '', clentOs: '', osVersion: '', osImage: '' },
    // params: newParams
  }
  dataConfig = urlConfig.method.toLowerCase() === 'get' ? { params: params } : { data: params }
  return request({
    method: urlConfig.method,
    url: urlConfig.url,
    ...dataConfig,
    ...axiosConfig,
    headers: {
      ...axiosConfig.headers
    }
  }).then(res => {
    return Promise.resolve(res)
    /* if (res.returnCode === '0') { // 正常返回
      return Promise.resolve(res)
    } else { // 其他错误
      return Promise.reject(res)
    } */
  }).catch(res => {
    return Promise.reject(res)
  })
}

export default handleRequest
