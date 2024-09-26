// [Easy] 2099. Find Subsequence of Length K With the Largest Sum
// 2099_find_subsequence_of_length_k_with_the_largest_sum

// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum
// Runtime: 76 ms, faster than 94.15% of JavaScript online submissions for Find Subsequence of Length K With the Largest Sum.
// Memory Usage: 44.4 MB, less than 29.82% of JavaScript online submissions for Find Subsequence of Length K With the Largest Sum.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSubsequence = function (nums, k) {
  const resultArr = nums
    .map((item, index) => [item, index])
    .sort((a, b) => b[0] - a[0])
    .slice(0, k)
  resultArr.sort((a, b) => a[1] - b[1])
  return resultArr.map((item) => item[0])
}

maxSubsequence([2, 1, 3, 3], 2)
maxSubsequence([-1, -2, 3, 4], 3)
