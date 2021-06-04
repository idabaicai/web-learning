import request from '@/utils/request'

// console.log(request)
export function getPeopleInfo () {
  request.get('/people')
    .then(res => {
      return res
    })
}

export function getMockData (url) {
  request.get(url)
    .then(res => {
      return res.data
    })
}
