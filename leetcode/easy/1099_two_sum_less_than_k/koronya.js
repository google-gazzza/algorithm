// [Easy] 1099. Two Sum Less Than K
// 1099_two_sum_less_than_k

// https://leetcode.com/problems/two-sum-less-than-k
// Runtime: 68 ms, faster than 97.55% of JavaScript online submissions for Two Sum Less Than K.
// Memory Usage: 42.4 MB, less than 6.53% of JavaScript online submissions for Two Sum Less Than K.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const twoSumLessThanK = function (nums, k) {
  const numsLen = nums.length
  let max = -1
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const numA = nums[i]
    for (let j = i + 1; j < numsLen; j += 1 || 0) {
      const sum = numA + nums[j]
      if (sum < k) {
        max = Math.max(max, sum)
      }
    }
  }

  return max
}

twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60)
twoSumLessThanK([10, 20, 30], 15)
