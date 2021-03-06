
/**
 * 函数的属性
 * length: 参数的长度
 * prototype: 原型对象
 */
/**
 * 函数的方法
 * apply,call 以指定的对象调用此函数
 */
function sum(a, b) {
  return a + b;
}
function callSum() {
  return sum.apply(this, arguments)
}
function callSum2(a, b) {
  return sum.apply(this, [a, b])
}
console.log(callSum(2,3)); // 5
// 传入数组
console.log(callSum(3, 3)); // 6
// 用call传参时一个一个传
function callSum3(a, b){
  return sum.call(this, a, b)
}
console.log(callSum3(8, 8)); // 16
// 改变this指向
window.msg = 'I am window';
const o = {
  msg: 'I am o'
}
function foo() {
  console.log(this.msg);
}
foo(); // I am window
foo.call(window) // I am window
foo.call(o); // I am o
/**
 * bind 方法 也可以改变this指向
 */
window.info = 'window info';
const obj = {
  info: 'obj info'
};
function sayInfo() {
  console.log(this.info);
}
sayInfo(); // window info
const objSayInfo = sayInfo.bind(obj);
objSayInfo(); // obj info
/**
 * 严格模式下不能使用arguments.callee, 因此用命名函数表达式解耦递归函数
 */
const factorial = function f(num) {
  if(num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
};
console.log(factorial(5)); //  120