
// 用一个全局变量被注册的副作用函数

let activeEffect

function effect(fn) {
  // 将副作用函数赋给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}

let data = {
  value: 'hello'
}



const bucket = new Set()
const obj = new Proxy(data, {
  get(target, key) {
    console.log('call getter');
    if(activeEffect) {
      bucket.add(activeEffect)
    }
    return target[key]
  },
  set(target, key, value) {
    target[key] = value
    console.log('call setter')
    bucket.forEach(fn => fn())
    return true
  }
})

effect(() => {
  console.log('call effect');
  console.log('current value is ', obj.value)
})

// setTimeout(() => {
//   obj.value = 'world'
// }, 1000)

setTimeout(() => {
  obj.noExist = 'awesome'
}, 2000)

// 问题
/**
 * 没有在副作用函数和被操作的字段之间建立联系，无论读取哪一个属性，都会收集副作用函数，无论设置哪一个属性，都会将副作用函数取出并执行
 */
