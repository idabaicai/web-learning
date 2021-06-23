
// two sum
function twoSum(nums:number[], target: number): number[] {
  const map = new Map();
  nums.forEach((item, index) => {
    map.set(item, index);
  })
  for(let i = 0; i < nums.length; i++) {
    const subName = target - nums[i];
    const mapIndex:number = map.get(subName);
    if(map.has(subName) && i !== mapIndex) {
      return [i, mapIndex];
    }
  }
}