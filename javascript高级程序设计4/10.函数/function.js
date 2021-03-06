/**
 * 函数声明
 */
// arrow function
let value = {}
const setName = x => x.name = "Link"
setName(value);
console.log(value.name);
// 函数会暴露一个name属性
function say() {
  console.log('hello');
}
console.log(say.name); // say
let sing = function() {
  console.log('来呀，快活呀。');
};
console.log(sing.name); // sing
let go = () => {
  console.log('go go go!!!');
}
console.log(go.name); // go
console.log(function(){}.name); // 空字符串
console.log((() => {}).name); // 空字符串
console.log((new Function()).name); // anonymous
console.log('扩展参数(+_+)');
function getSum() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
const list = [1,2,3,4];
const res = getSum.apply(null, list);
console.log(res);  // 10
// 利用扩展操作符👍
console.log(getSum(1, 2, ...list)); // 13
