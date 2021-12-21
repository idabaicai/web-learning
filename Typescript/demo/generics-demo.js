// 泛型
var getLastArray = function (arr) {
    return arr[arr.length - 1];
};
console.log(getLastArray([1, 2, 3, 4]));
console.log(getLastArray([1, 2, 3, '12']));
var makeTuple = function (x, y) { return [x, y]; };
var v1 = makeTuple(1, true);
console.log(v1);
var v2 = makeTuple('string', 666);
console.log(v2);
