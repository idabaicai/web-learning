/**
 * 响应式系统的基本实现
 */

const data = {
  value: 'hello'
}
// 收集依赖
const bucket = new Set()
const obj = new Proxy(data, {
  get(target, key) {
    console.log('call getter');
    bucket.add(effect)
    return target[key]
  },
  set(target, key, value) {
    console.log('call setter');
    target[key] = value
    bucket.forEach(fn => fn())
    return true
  }
})

function effect() {
  console.log('The obj.value is ', obj.value)
}

effect()
obj.value = 'world'
setTimeout(() => {
  obj.value = 'Meta universal'
}, 1000)
