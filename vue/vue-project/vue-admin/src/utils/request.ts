import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000
  // headers: { 'c-header': 'value' }
})

// 请求拦截
instance.interceptors.request.use(config => {
  config.headers['C-Token'] = 'sesxvxeh'
  return config
}, error => {
  Message({
    type: 'error',
    message: error.message || 'error',
    duration: 3 * 1000
  })
  return Promise.reject(error)
})

// 响应拦截

instance.interceptors.response.use(response => {
  console.log(response.data)
  if (response.data.code !== 200) {
    Message({
      message: response.data.message || 'Error',
      type: 'error',
      duration: 3 * 1000
    })
  } else {
    return response
  }
  return response
}, error => {
  Message({
    message: error.message || 'Error',
    type: 'error',
    duration: 3 * 1000
  })
  return Promise.reject(error)
})

export default instance
