// two sum
function twoSum1(nums, target) {
    var map = new Map();
    nums.forEach(function (item, index) {
        map.set(item, index);
    });
    console.log(map);

    for(let i = 0; i < nums.length; i++) {
        let subNum = target - nums[i];
        if(map.has(subNum) && map.get(subNum) !== i) {
            return [i, map.get(subNum)];
        }
    }
    return [];
}

const result = twoSum([3,2,4], 6);
console.log(result);