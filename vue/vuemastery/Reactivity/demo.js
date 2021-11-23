
let price = 5
let quantity = 2;

let total = 0;

let dep = new Set() // To store effects

let effect = () => {
  total = price * quantity;
}

function track() { // Add the code
  dep.add(effect);
}

function trigger() { // Re-Run all the code in storage
  dep.forEach(effect => effect())
}

track()

effect()
