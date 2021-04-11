// merge sorted array
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
/**
 * 
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 */


/**
 * 
 * @param {number[]} nums1 
 * @param {number} m 
 * @param {number[]} nums2 
 * @param {number} n
 * @return {void} modify nums1 in-place instead 
 */
function merge(nums1, m, nums2, n) {
  // 删除多余的0
  nums1.splice(m, nums1.length - m)
  console.log(nums1);
  // merge数组
  for(let i=0; i<n; i++) {
    nums1.push(nums2[i])
  }
  // 排序
  nums1.sort((a, b) => a - b);
  console.log(nums1);
}
/**
 * @desc 从后往前合并
 * @param {number[]} nums1 
 * @param {number} m 
 * @param {number[]} nums2 
 * @param {number} n 
 */
function merge1(nums1, m, nums2, n) {
  let tail1 = m - 1,
        tail2 = n - 1,
        finished = m + n - 1;
  while(tail1 >= 0 && tail2 >= 0) {
    nums1[finished--] = nums1[tail1] > nums2[tail2] ? nums1[tail1--] : nums2[tail2--]
  }
  while(tail2 >= 0) {
    nums1[finished--] = nums2[tail2--]
  }
  console.log(nums1);
}
const nums1 = [1, 2, 3, 0, 0, 0]
const nums2 = [2, 5, 6, 8]
// merge(nums1, 3, nums2, 3)
merge1(nums1, 3, nums2, 4)