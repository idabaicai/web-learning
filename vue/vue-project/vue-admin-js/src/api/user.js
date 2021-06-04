import request from '../utils/request'

export function getUserList () {
  return request.get('api/getUserList')
}

export function test () {
  return request.post('test')
  // return request.get('test')
}
