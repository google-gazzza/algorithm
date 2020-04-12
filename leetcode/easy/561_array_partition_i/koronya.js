// https://leetcode.com/problems/array-partition-i
// Runtime: 116 ms, faster than 70.33% of JavaScript online submissions for Array Partition I.
// Memory Usage: 39 MB, less than 77.78% of JavaScript online submissions for Array Partition I.
const arrayPairSum = nums => {
  const numsLen = nums.length
  let max = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < numsLen; i = i + 2 | 0) {
    max += nums[i]
  }

  return max
}
