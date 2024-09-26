// [Medium] 1940. Longest Common Subsequence Between Sorted Arrays
// 1940_longest_common_subsequence_between_sorted_arrays

// https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Longest Common Subsequence Between Sorted Arrays.
// Memory Usage: 41.4 MB, less than 91.30% of JavaScript online submissions for Longest Common Subsequence Between Sorted Arrays.

/**
 * @param {number[][]} arrays
 * @return {number[]}
 */
const longestCommonSubsequence = function (arrays) {
  const arraysLen = arrays.length
  const numMap = new Map()
  arrays.forEach((array) => {
    array.forEach((num) => {
      numMap.set(num, (numMap.get(num) || 0) + 1)
    })
  })

  return [...numMap].filter((item) => item[1] === arraysLen).map((item) => item[0])
}

longestCommonSubsequence([
  [1, 3, 4],
  [1, 4, 7, 9],
]) //?

longestCommonSubsequence([
  [2, 3, 6, 8],
  [1, 2, 3, 5, 6, 7, 10],
  [2, 3, 4, 6, 9],
]) //?
longestCommonSubsequence([
  [1, 2, 3, 4, 5],
  [6, 7, 8],
]) //?
