// Symbol 创建唯一记号，进而用作非字符串形式的对象属性、
const sym1 = Symbol('foo');
console.log(typeof sym1); // symbol
const sym2 = Symbol('foo');
console.log(sym1 == sym2); // false
console.log(sym1.toString()); // Symbol(foo)
// 全局符号注册表
const fooGlobalSymbol = Symbol.for('foo');
const barGlobalSymbol = Symbol.for('bar');
const otherGlobalSymbol = Symbol.for('foo');
console.log(fooGlobalSymbol === otherGlobalSymbol); // true
console.log(Symbol.keyFor(fooGlobalSymbol)); // foo