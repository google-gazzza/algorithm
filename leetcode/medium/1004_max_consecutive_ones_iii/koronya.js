// [Medium] 1004. Max Consecutive Ones III
// 1004_max_consecutive_ones_iii

// https://leetcode.com/problems/max-consecutive-ones-iii
// Runtime: 3032 ms, faster than 5.14% of JavaScript online submissions for Max Consecutive Ones III.
// Memory Usage: 43.5 MB, less than 54.57% of JavaScript online submissions for Max Consecutive Ones III.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
  let max = 0
  const numsLen = nums.length
  for (let i = 0; i < numsLen; i += 1 || 0) {
    let oneCount = 0
    let flipCount = 0
    for (let j = i; j < numsLen; j += 1 || 0) {
      if (nums[j] === 0) {
        flipCount += 1
        if (flipCount > k) {
          break
        }
      }
      oneCount += 1
    }
    max = Math.max(max, oneCount)
  }

  return max
}

longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2) //?
// longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3) //?
// longestOnes([0, 0, 1, 1], 3) //?

// longestOnes([0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2) //?
// longestOnes([0, 0], 3)
// longestOnes([0, 0, 1, 1], 3)
