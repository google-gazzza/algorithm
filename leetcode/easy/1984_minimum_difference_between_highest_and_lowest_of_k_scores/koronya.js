// [Easy] 1984. Minimum Difference Between Highest and Lowest of K Scores
// 1984_minimum_difference_between_highest_and_lowest_of_k_scores

// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores
// Runtime: 92 ms, faster than 76.84% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
// Memory Usage: 41 MB, less than 22.43% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function (nums, k) {
  if (k === 1) {
    return 0
  }
  const numsLen = nums.length
  nums.sort((a, b) => b - a)
  const diff = numsLen - k + 1
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < diff; i += 1 || 0) {
    min = Math.min(nums[i] - nums[k - 1 + i], min)
  }

  return min
}

// minimumDifference([90], 1) //?
// minimumDifference([9, 4, 1, 7], 2) //?
minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6) //?
minimumDifference([64407, 3036], 2) //?
