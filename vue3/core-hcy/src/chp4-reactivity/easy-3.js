
let activeEffect

const data = {
  name: 'AAA',
  age: 20
}

const bucket = new WeakMap()
// bucket: WeakMap<target =>Deps<Map<key, Set:effect>>>
const obj = new Proxy(data, {
  get(target, key) {
    track(target, key)
    return target[key]
  },
  set(target, key, value) {
    target[key] = value
    trigger(target, key)
  }
})

function track(target, key) {
  if(!activeEffect) return
  let depsMap = bucket.get(target)
  if(!depsMap) {
    bucket.set(target, depsMap = new Map())
  }
  depsMap.set(key, activeEffect)
}

function trigger(target, key) {
  const depsMap = bucket.get(target)
  const effect = depsMap.get(key)
  effect && effect()
}

function effect(fn) {
  activeEffect = fn
  fn()
}

effect(() => {
  console.log('obj.name is ', obj.name)
})

effect(() => {
  console.log('obj.age is ', obj.age);
})
console.log(bucket);

setTimeout(() => {
  obj.name = 'BBB'
  obj.age = 26
}, 800)


