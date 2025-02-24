// [Medium] 300. Longest Increasing Subsequence
// 300_longest_increasing_subsequence

// https://leetcode.com/problems/longest-increasing-subsequence
// Runtime: 294 ms, faster than 12.87% of TypeScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 40.4 MB, less than 90.10% of TypeScript online submissions for Longest Increasing Subsequence.

function lengthOfLIS(nums: number[]): number {
  const numsLen: number = nums.length
  if (numsLen <= 1) {
    return numsLen
  }

  const arr: number[] = Array(numsLen).fill(1)
  for (let i: number = 1; i < numsLen; i += 1) {
    for (let prev: number = 0; prev < i; prev += 1) {
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
