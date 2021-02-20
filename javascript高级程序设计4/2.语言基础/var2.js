// 在variable.js用let中定义过 age 所以下边代码会报错
// let age = 22;  // age is already been declared
try {
    console.log(uname);
} catch (error) {
    let uname;
}
uname = 'pink'; // uname 被限制在 {} 中，此时uname为全局变量
console.log('var2.js');