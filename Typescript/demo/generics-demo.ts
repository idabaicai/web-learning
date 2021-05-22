
// 泛型
const getLastArray = <T>(arr: T[]) => {
  return arr[arr.length - 1]
}

console.log(getLastArray([1,2,3,4]))
console.log(getLastArray([1,2,3,'12']))


const makeTuple = <T, Y>(x: T, y: Y) => [x, y]

const v1 = makeTuple(1, true)
console.log(v1)
const v2 = makeTuple<string, number>('string', 666)
console.log(v2)