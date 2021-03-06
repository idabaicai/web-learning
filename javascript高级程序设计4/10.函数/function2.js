/**
 * 函数内部
 * 1. arguments
 * 2. this
 */
// 经典阶乘函数
function factorial(num) {
  if(num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5)); // 120

// 解耦
function factorial2(num) {
  if(num <= 1) {
    return 1;
  } else {
    // arguments.callee 只想arguments对象所在函数的指针
    return num * arguments.callee(num - 1); // 120
  }
}
console.log(factorial2(5));

window.color = 'red';
const o = {
  color: 'green',
  sayColor: sayColor
};
function sayColor() {
  console.log(this.color); // red
}
const arrowFunctionSayColor = () => {
  console.log('arrowSayColor: '+ this.color); // ... red
}
sayColor()
sayColor.call(o); // green
o.sayColor(); // green
arrowFunctionSayColor()
arrowFunctionSayColor(o); // ... red

console.log('定时器中的this指向');
function sayHello() {
  this.msg = 'hello => function'
  setTimeout(() => {
    console.log(this.msg);
  }, 1000);
}
function sayHello2() {
  this.msg1 = 'hello normal function';
  setTimeout(function() {
    console.log(this.msg1);
  }, 1000)
}
new sayHello(); // hello => function
new sayHello2(); // undefined
/**
 * caller属性, 引用的是调用当前函数的函数
 */
function outer() {
  console.log('outer called');
  inner();
}
function inner() {
  console.log(inner.caller); // f outer() { inner() }
}
outer();
