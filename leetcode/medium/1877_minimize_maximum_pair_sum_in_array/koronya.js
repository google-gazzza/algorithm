// [Medium] 1877. Minimize Maximum Pair Sum in Array
// 1877_minimize_maximum_pair_sum_in_array

// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array
// Runtime: 544 ms, faster than 18.33% of JavaScript online submissions for Minimize Maximum Pair Sum in Array.
// Memory Usage: 56.4 MB, less than 48.33% of JavaScript online submissions for Minimize Maximum Pair Sum in Array.

/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  const numsLen = nums.length
  const mid = numsLen / 2
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < mid; i += 1 || 0) {
    max = Math.max(max, nums[i] + nums[numsLen - 1 - i])
  }
  return max
}

minPairSum([3, 5, 2, 3]) //?
minPairSum([1, 3, 8, 9]) //?
minPairSum([3, 5, 4, 2, 4, 6]) //?
