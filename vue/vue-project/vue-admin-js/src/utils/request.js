import axios from 'axios'

const instance = axios.create({
  // baseURL: process.env.BASE_URL
  baseURL: 'https://www.fastmock.site/mock/151b0a499ec1271412859e6ae75728c0/admin/'
})

instance.interceptors.request.use(config => {
  config.headers['X-token'] = 'tocken123'
  return config
}, error => {
  return Promise.reject(error)
})

const request = {
  get (url) {
    return new Promise((resolve, reject) => {
      instance.get(url)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  /**
   *
   * @param { string } url
   * @param { object } data
   * @returns
   */
  post (url, data) {
    return new Promise((resolve, reject) => {
      instance.post(url, data)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
// export default instance
export default request
