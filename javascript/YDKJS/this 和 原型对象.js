
// 为什么使用 this
function identify() {
  return this.name.toUpperCase()
}


function speak() {
  const greeting = 'Hello, I am ' + identify.call(this)
  console.log(greeting)
}

const me = {
  name: 'LH'
}

const me2 = {
  name: 'me2'
}

speak.call(me)
speak.call(me2)

// 一个误解

function foo(num) {
  console.log('foo: ' + num)
  this.count++ // 这个 this 指向的不是函数对象
  foo.num++ // 这样才能指向函数对象
}
foo.count = 0
foo.num = 0
let i

for(i = 0; i < 10; i++) {
  if(i > 5) {
    foo(i)
  }
}
console.log(foo.count) // 0
console.log(foo.num) // 4