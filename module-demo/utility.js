const PI = 3.1415926
let name = 'Link'
let age = 24
let money = 8600000

const say = () => {
    console.log('My name is ' + name + ',' + 'age is ' + age + '.');
}
export default {
    PI,
    name,
    age,
    say
}
// 按需导出
export let sex = 'male'
export function show() {
    console.log('show time.');
}