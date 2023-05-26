// [Easy] 485. Max Consecutive Ones
// 485_max_consecutive_ones

// https://leetcode.com/problems/max-consecutive-ones
// Runtime: 80 ms, faster than 90.59% of JavaScript online submissions for Max Consecutive Ones.
// Memory Usage: 40.7 MB, less than 6.14% of JavaScript online submissions for Max Consecutive Ones.
const findMaxConsecutiveOnes = function (nums) {
  let max = 0
  nums.reduce((acc, cur) => {
    if (cur === 1) {
      const newAcc = acc + 1
      max = Math.max(newAcc, max)
      return newAcc
    } else {
      return 0
    }
  }, 0)

  return max
}
