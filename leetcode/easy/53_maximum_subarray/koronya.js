// https://leetcode.com/problems/maximum-subarray/submissions/
// Runtime: 56 ms, faster than 84.68% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 35.1 MB, less than 90.74% of JavaScript online submissions for Maximum Subarray.

const maxSubArray = nums => {
  const numsLen = nums.length
  if (numsLen === 0) {
    return 0
  }

  let sum = 0
  let maxVal = -Infinity
  nums.map(item => {
    sum += item
    maxVal = Math.max(sum, maxVal)
    if (sum < 0) {
      sum = 0
    }
  })

  return maxVal
}
