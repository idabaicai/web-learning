
let activeEffect

function effect(fn) {
  activeEffect = fn
  fn()
}

let data = {
  value: 'hello'
}


const bucket = new WeakMap()
// const deps = new Map()
// deps.set(key, effect)
// bucket.set(target, deps)
const obj = new Proxy(data, {
  get(target, key) {
    if(!activeEffect) {
      return
    }
    let depsMap = bucket.get(target)
    // 如果不存才 depsMap, 则新建一个 Map 与 target 关联
    if(!depsMap) {
      bucket.set(target, (depsMap = newMap()))
    }
    // 根据 key 从 depsMap 中取得 deps, 它是一个 Set 类型
    let deps = depsMap.get(key)
    // 如果 deps 不存在，同样新建一个 Set 并与 key 关联
    if(!deps) {
      depsMap.set(key,(deps = new Set()))
    }
    // 最后将当前激活的 activeEffect 添加到桶中
    deps.add(activeEffect)
    return target[key]
  },
  set(target, key, value) {
    target[key] = value
    const deps = bucket.get(target)
    if(!deps) return
    const effects = deps.get(key)
    effects && effects.forEach(fn => fn())
  }
})

effect(() => {
  console.log('run effect')
  console.log('obj.value is ', obj.value)
})
