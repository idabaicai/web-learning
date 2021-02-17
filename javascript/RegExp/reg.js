/**
 * Regular Expression
 */
const arr = '1212t3';
// new RegExp
const regExp = new RegExp(/123/);
console.log(regExp);
console.log(regExp.test(arr));

// 边界符 ^ $
const str1 = "trb"
    //  字面量创建
const reg1 = /^[a-z]rb$/; // 以a-z开始 rb结尾
console.log(reg1.test(str1));

console.log('----------------');
const reg2 = /[qwer]/; // 只要包含其中一个就行
console.log(reg2.test('asdsw'));
console.log('----------------');
const reg3 = /^[ab]$/ // 下边两种情况为  true
console.log(reg3.test('a')); // true
console.log(reg3.test('b')); // true
console.log(reg3.test('ab')); // false
console.log('---------------');
// 字母数字组合
const reg4 = /^[a-zA-Z0-9]$/
    // 对reg4取反
const reg5 = /^[^a-zA-Z0-9]$/
console.log(reg4.test('！'));
console.log(reg5.test("！"));
console.log('-----------');
// 量词
/**
 *  * 0次或多次
 *  + 1次或多次
 *  ? 0次或1次
 *  {n} n次
 *  {n,} n次或更多次
 *  {m, n} m 到 n 次
 */
const reg6 = /^[a-zA-Z]?$/
console.log(reg6.test('a'));
console.log(reg6.test('aAss'));
console.log('----------------');
// () 作用

const reg7 = /(打工人){2}/
console.log(reg7.test('打工人'));
console.log(reg7.test('打工人打工人')); // true

console.log('--------------------');
// 座机号验证 010-12345678  0530-1234567
const num1 = '010-12345678'
const num2 = '0212-12345671'
    // | 表示两个条件
const reg8 = /^[0-9]{3}-[0-9]{8}|[0-9]{4}-[0-9]{7}$/
const reg9 = /^\d{3}-\d{8}|\d{4}-\d{7}$/
console.log(reg9.test(num1));
console.log(reg9.test(num2));
console.log('=================');
// 手机号
const reg10 = /^1[3|4|5|6|8|]\d{9}$/;
console.log(reg10.test(13384239186));
console.log('------------------');
// QQ号
const reg11 = /^[^0]\d{4,10}$/;
console.log(reg11.test('012321212'));
//  /g 全局  /i 忽略大小写