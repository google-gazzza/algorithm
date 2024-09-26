// [Medium] 1877. Minimize Maximum Pair Sum in Array
// 1877_minimize_maximum_pair_sum_in_array

// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array
// Runtime: 432 ms, faster than 85.71% of TypeScript online submissions for Minimize Maximum Pair Sum in Array.
// Memory Usage: 55.3 MB, less than 78.57% of TypeScript online submissions for Minimize Maximum Pair Sum in Array.
function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const numsLen: number = nums.length
  const mid: number = numsLen / 2
  let max: number = Number.MIN_SAFE_INTEGER
  for (let i: number = 0; i < mid; i += 1) {
    max = Math.max(max, nums[i] + nums[numsLen - 1 - i])
  }
  return max
}

minPairSum([3, 5, 2, 3]) //?
minPairSum([1, 3, 8, 9]) //?
minPairSum([3, 5, 4, 2, 4, 6]) //?
