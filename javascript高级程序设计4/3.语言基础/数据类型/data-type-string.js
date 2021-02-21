// String
const st1 = 'link'
const st2 = '违章动物'
const num1 = 0xa32;
const num2 = 027
const foo = undefined;
const myHouse = null;
const isGirl = false;
console.log(st1.length); // 4
console.log(st2.length); // 4
console.log(num1.toString()); // 2610
console.log(num2.toString()); // 23
// 传入底数，可以得到二进制、八进制、十六进制的数的字符串表示
console.log(num2.toString(8)); // 27
console.log(num2.toString(2)); // 10111
console.log(String(foo)); // undefined
// console.log(foo.toString()); // Cannot read property 'toString' of undefined
console.log(String(myHouse)); // null
// console.log(myHouse.toString()); // Cannot read property 'toString' of null
console.log(isGirl.toString()); // false
console.log(`模板字符串`);
const msg = 'world'
const st3 = ` hello ${msg}, ${1 === 1}` // hello world, true
console.log(st3);
console.log('模板字面量标签函数');
let a = 6;
let b = 9;

function simpleTag(string, aValueExpression, bValueExpression, sumExpression) {
    console.log(string);
    console.log(aValueExpression);
    console.log(bValueExpression);
    console.log(sumExpression);
    return 'foobar';
}
const untagedResult = `${ a } + ${ b } = ${ a + b }`;
const tagedResult = simpleTag `${ a } + ${ b } = ${ a + b }`;
console.log(untagedResult); //  6 + 9 = 15
console.log(tagedResult);
// 利用剩余操作符(rest operator)将参数收集到一个数组中
function simpleTag2(string, ...expression) {
    console.log(string);
    for (const string of expression) {
        console.log(string);
    }
    return 'foobar'
}
const tagedResult2 = simpleTag2 `${ a } + ${ b } = ${ a + b }`;
console.log(tagedResult2);