

// 常用数据类型
const age: number = 22
const uname: string = 'dabai'
const hasHouse: boolean = false
const undef: undefined = undefined
const car: null = null

interface User {
  name: string,
  id: number,
  hasHouse: boolean
}
const user1:User = {
  name: 'dabai',
  id: 1001,
  hasHouse: false
}

console.log(age, uname)
console.log('user1', user1)