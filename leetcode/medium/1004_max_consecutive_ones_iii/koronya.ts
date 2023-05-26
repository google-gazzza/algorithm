// [Medium] 1004. Max Consecutive Ones III
// 1004_max_consecutive_ones_iii

// https://leetcode.com/problems/max-consecutive-ones-iii
// Runtime: 3068 ms, faster than 6.25% of TypeScript online submissions for Max Consecutive Ones III.
// Memory Usage: 44.6 MB, less than 12.50% of TypeScript online submissions for Max Consecutive Ones III.
function longestOnes(nums: number[], k: number): number {
  let max: number = 0
  const numsLen: number = nums.length
  for (let i: number = 0; i < numsLen; i += 1) {
    let oneCount: number = 0
    let flipCount: number = 0
    for (let j: number = i; j < numsLen; j += 1) {
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
