
// vue reactivity

const depsMap = new Map()

function track(key) {
  let dep = depsMap.get(key)
  if(!dep) {
    console.log('no dep yet');
    depsMap.set(key, (dep = new Set()))
  }
  dep.add(effect)
}

function trigger(key) {
  let dep = depsMap.get(key)
  console.log('dep in trigger is',dep);
  if(dep) {
    dep.forEach((effect) => {
      effect()
    })
  }
}

let product = {
  price: 5,
  quantity: 10
}

let total = 0

let effect = () => {
  total = product.price * product.quantity
}

track('quantity')
effect()

console.log('total is ', total) // 50
product.quantity = 200
console.log('total is ', total) // 50
trigger('quantity')
console.log('after run trigger total is ', total) // 1000 great !

