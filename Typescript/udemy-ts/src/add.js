var input1 = document.querySelector('#num1');
var input2 = document.querySelector('#num2');
var btn1 = document.querySelector('#add');
function addNum(a, b) {
    return a + b;
}
btn1 === null || btn1 === void 0 ? void 0 : btn1.addEventListener('click', function () {
    console.log(addNum(parseInt(input1.value), parseInt(input2.value)));
    console.log('hello');
});
