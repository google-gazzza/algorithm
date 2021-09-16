// [Easy] 1984. Minimum Difference Between Highest and Lowest of K Scores
// 1984_minimum_difference_between_highest_and_lowest_of_k_scores

// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores
// Runtime: 84 ms, faster than 95.65% of TypeScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
// Memory Usage: 41.4 MB, less than 43.48% of TypeScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.

function minimumDifference(nums: number[], k: number): number {
  if (k === 1) {
    return 0
  }
  const numsLen: number = nums.length
  nums.sort((a, b) => b - a)
  const diff: number = numsLen - k + 1
  let min: number = Number.MAX_SAFE_INTEGER
  for (let i: number = 0; i < diff; i += 1) {
    min = Math.min(nums[i] - nums[k - 1 + i], min)
  }

  return min
}

// minimumDifference([90], 1) //?
// minimumDifference([9, 4, 1, 7], 2) //?
minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6) //?
minimumDifference([64407, 3036], 2) //?
