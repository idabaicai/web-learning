/**
 * 函数作为值
 */
function callSomeFunction(someFunction, someArgument) {
  someFunction(someArgument);
}
function say(msg) {
  console.log(msg);
}
const msg = "hello function";
callSomeFunction(say, msg); // hello function
/**
 * 从一个函数中返回另一个函数
 */
function createComFunction(propertyName) {
  return function(obj1, obj2) {
    console.log(obj1); // {name: "Link", age: 22}
    console.log(obj1[propertyName]); // 22
    return obj1[propertyName] < obj2[propertyName] ? -1 : 0;
  }
}
const person = [
  { name: 'pink', age: 28},
  { name: 'link', age: 22 }
];
person.sort(createComFunction('age'));
console.log(person[0].age); // 22
