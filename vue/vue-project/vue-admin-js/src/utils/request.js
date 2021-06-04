import axios from 'axios'

const instance = axios.create({
  // baseURL: process.env.BASE_URL
  baseURL: 'http://localhost:8080'
})

instance.interceptors.request.use(config => {
  config.headers['X-token'] = 'tocken123'
  return config
}, error => {
  return Promise.reject(error)
})

export default instance
