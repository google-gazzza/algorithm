// [Easy] 2099. Find Subsequence of Length K With the Largest Sum
// 2099_find_subsequence_of_length_k_with_the_largest_sum

// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum
// Runtime: 74 ms, faster than 100.00% of TypeScript online submissions for Find Subsequence of Length K With the Largest Sum.
// Memory Usage: 45.1 MB, less than 27.78% of TypeScript online submissions for Find Subsequence of Length K With the Largest Sum.

function maxSubsequence(nums: number[], k: number): number[] {
  const resultArr = nums
    .map((item, index) => [item, index])
    .sort((a, b) => b[0] - a[0])
    .slice(0, k)
  resultArr.sort((a, b) => a[1] - b[1])
  return resultArr.map((item) => item[0])
}
