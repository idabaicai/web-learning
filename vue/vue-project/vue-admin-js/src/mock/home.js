// import Mock from 'mockjs'
const Mock = require('mockjs')

Mock.mock('api/home', {
  'list|1-10': [{
    'id|+1': 1,
    email: '@email'
  }]
})
