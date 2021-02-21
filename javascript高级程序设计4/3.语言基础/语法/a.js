const arr = [1, 3, 4, 5];
for (const item in arr) {
    console.log(item); // 0 1 2 3
    // console.log(arr[item]);  // 1, 3, 4, 5
}
console.log('-------------');
for (const item of arr) {
    console.log(item); //1, 3, 4, 5
}
console.log('-------map-------');
const map1 = arr.map(x => x * 2);
console.log(map1); // 2, 6, 8, 10