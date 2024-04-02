/**
 * href: https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-100-liked
 * @param {string} str
 */
function lenOfLongestSubString(str) {
  let ans = 0
  let r = -1
  const len = str.length
  const queue = []
  for (let i = 0; i < str.length; i++) {
    if (i !== 0) {
      queue.shift()
    }
    while (r < len - 1 && !queue.includes(str.charAt(r + 1))) {
      queue.push(str.charAt(r + 1))
      r++
      ans = Math.max(ans, r - i + 1)
    }
  }
  return ans
}

const r1 = lenOfLongestSubString('abcbca')
console.log(r1)  // 3
