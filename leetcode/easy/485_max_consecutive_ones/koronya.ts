// [Easy] 485. Max Consecutive Ones
// 485_max_consecutive_ones

// https://leetcode.com/problems/max-consecutive-ones
// Runtime: 92 ms, faster than 54.55% of TypeScript online submissions for Max Consecutive Ones.
// Memory Usage: 41.6 MB, less than 7.79% of TypeScript online submissions for Max Consecutive Ones.
function findMaxConsecutiveOnes (nums: number[]): number {
  let max: number = 0
  nums.reduce((acc: number, cur: number) => {
    if (cur === 1) {
      const newAcc: number = acc + 1
      max = Math.max(newAcc, max)
      return newAcc
    } else {
      return 0
    }
  }, 0)

  return max
}
