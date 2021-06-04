import request from '@/utils/request'

export function getInfo ():any {
  return request({
    url: '/api/user',
    method: 'get'
  })
}
