// https://leetcode.com/problems/next-greater-element-ii
// Runtime: 260 ms, faster than 13.39% of JavaScript online submissions for Next Greater Element II.
// Memory Usage: 41.4 MB, less than 61.48% of JavaScript online submissions for Next Greater Element II.
const nextGreaterElements = nums => {
  const numsLen = nums.length
  return nums.map((num, index) => {
    for (let i = 0; i < numsLen; i = i + 1 | 0) {
      const modVal = nums[(i + index) % numsLen]
      if (modVal > num) {
        return modVal
      }
    }
    return -1
  })
}
