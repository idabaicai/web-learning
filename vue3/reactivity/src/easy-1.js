
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



const dep = new Set()
const obj = new Proxy(data, {
  get(target, key) {
    console.log('call getter');
    if(activeEffect) {
      dep.add(activeEffect)
    }
    return target[key]
  },
  set(target, key, value) {
    target[key] = value
    console.log('call setter')
    dep.forEach(fn => fn())
    return true
  }
})

effect(() => {
  console.log('current value is ', obj.value)
})

setTimeout(() => {
  obj.value = 'world'
}, 1000)
