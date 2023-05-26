// [Easy] 1099. Two Sum Less Than K
// 1099_two_sum_less_than_k

// https://leetcode.com/problems/two-sum-less-than-k
// Runtime: 120 ms, faster than 26.32% of TypeScript online submissions for Two Sum Less Than K.
// Memory Usage: 43.5 MB, less than 5.26% of TypeScript online submissions for Two Sum Less Than K.

function twoSumLessThanK(nums: number[], k: number): number {
  const numsLen = nums.length
  let max: number = -1
  for (let i: number = 0; i < numsLen; i += 1) {
    const numA = nums[i]
    for (let j: number = i + 1; j < numsLen; j += 1) {
      const sum = numA + nums[j]
      if (sum < k) {
        max = Math.max(max, sum)
      }
    }
  }

  return max
}
