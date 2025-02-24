// [Medium] 300. Longest Increasing Subsequence
// 300_longest_increasing_subsequence

// https://leetcode.com/problems/longest-increasing-subsequence
// Runtime: 234 ms, faster than 25.59% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 39.8 MB, less than 97.71% of JavaScript online submissions for Longest Increasing Subsequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  const numsLen = nums.length
  if (numsLen <= 1) {
    return numsLen
  }

  const arr = Array.from({ length: numsLen }).fill(1)
  for (let i = 1; i < numsLen; i += 1 || 0) {
    for (let prev = 0; prev < i; prev += 1 || 0) {
      if (nums[prev] < nums[i]) {
        arr[i] = Math.max(arr[i], arr[prev] + 1)
      }
    }
  }

  return Math.max(...arr)
}

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]) //?
lengthOfLIS([0, 1, 0, 3, 2, 3]) //?
lengthOfLIS([7, 7, 7, 7, 7, 7, 7]) //?
