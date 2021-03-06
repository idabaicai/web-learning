/**
 * 😀闭包
 */
 function createComFunction(propertyName) {
  return function(obj1, obj2) {
    console.log(obj1); // {name: "Link", age: 22}
    console.log(obj1[propertyName]); // 22
    return obj1[propertyName] < obj2[propertyName] ? -1 : 0;  // 访问了另一个函数作用域的活动对象
  }
}
const person = [
  { name: 'pink', age: 28},
  { name: 'link', age: 22 }
];
let compareFunction = createComFunction('age')
person.sort(compareFunction);
// 手动接触引用以释放内存
compareFunction = null;
console.log(person[0].age); // 22
/**
 * 闭包中this指向
 */
window.msg = 'my window';

const foo = {
  msg: 'foo msg',
  sayMsg() {
    return function() {
      return this.msg;
    }
  }
}
console.log(foo.sayMsg()()); // my window

const bar = {
  msg: 'bar msg',
  sayMsg() {
    console.log(this);  // bar {msg: 'bar msg', sayMsg(){}}
    let that = this;
    return function() {
      console.log(this); // Window {...}
      return that.msg;
    }
  }
}
console.log(bar.sayMsg()()); // bar msg