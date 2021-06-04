import request from '@/utils/request'

// console.log(request)
export function getPeopleInfo () {
  request.get('/people')
    .then(res => {
      return res.data
    })
}

export function getMockData (url) {
  request.get(url)
    .then(res => {
      return res.data
    })
}
