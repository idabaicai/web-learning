
function say(word) {
  console.log(`hello ${word}`);
}

const fn = new Proxy(say, {
  apply(target, thisArg, argArray) {
    console.log('call apply');
    target.call(thisArg, ...argArray)
  }
})

fn('chengdu')