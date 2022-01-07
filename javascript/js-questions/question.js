/**
 * What's the output?
 */
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Foo';
  let age = 18
}
sayHi();

/**
 * output: undefined、 ReferenceError
 *   
 */