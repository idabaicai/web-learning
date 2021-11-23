
function sum(a, b) {
  return a + b;
}

function callSum0(num1, num2) {
  return sum(num1, num2);
}

function callSum1(m, n) {
  return sum.apply(this, [m, n])
}

function callSum2() {
  return sum.apply(this, arguments)
}

console.log(callSum0(2,3));
console.log(callSum1(6, 8));
console.log(callSum2(6, 20));


const obj1 = {
  color: 'red'
}

const obj2 = {
  color: 'green'
}

function sayColor() {
  console.log(this.color);
}

sayColor.call(obj1);
sayColor.call(obj2);
console.log(sayColor.toString());
console.log(sayColor.valueOf());