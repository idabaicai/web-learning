function test() {
    var msg1 = 'hello'; // var 是函数作用域
    msg = 'word';
    console.log(msg1);
    console.log(msg);
    var name = 'Link',
        age = 22,
        house = null,
        girlFriend = undefined
    console.log(girlFriend);
    for (let i = 0; i < age; i += 6) {
        console.log(i); // let 是块级作用域
    }
    // console.log(i); // i is undefined
    for (var j = 0; j < age; j += 6) {

    }
    console.log('j is ' + j); // 24

}
test();
// console.log(msg1); // msg1 is not defined
console.log(msg);
console.log('--------------------------');
// var 声明的变量会成为window对象的属性 let相反
var uname = 'Cat';
console.log(window.uname); // Cat
let age = 18;
console.log(window.age); // undefined
// const 申明的变量不能被修改
const PI = 3.14159;
// PI = 3.14159; // Assignment to constant variable
console.log(PI);
try {
    PI = 3.14;
} catch (error) {
    console.log(PI); // 3.14159
}