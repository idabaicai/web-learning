
let price = 12
let quantity = 3
let total = 0

let dep = new Set() // to store our effect


const effect = () => {
  total = price * quantity
}

const track = () => { // add the code 
  dep.add(effect)
}

const trigger = () => {
  console.log(effect);
  dep.forEach((effect) => {
    effect() // re-run all the code in storage
  })
}

track()
effect()

console.log('total is ', total);
console.log('dep is ', dep);

price = 100
console.log('before run trigger total is ', total);


trigger()
console.log('after run trigger, total is ', total);