
let activeEffect;

class Dep {
  constructor(val) {
    this._value = val;
    this.subscribers = new Set();
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    this._value = newValue;
    this.notify();
  }
  depend() {
    if(activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }
  notify() {
    this.subscribers.forEach(effect => {
      console.log(effect);
      effect();
    })
  }
}

function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null
}

const dep = new Dep('hello');

watchEffect(() => {
  dep.depend();
  console.log(dep.value);
})
dep.value = 'changed';