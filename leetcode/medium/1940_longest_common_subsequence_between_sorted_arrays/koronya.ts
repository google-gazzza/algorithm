// [Medium] 1940. Longest Common Subsequence Between Sorted Arrays
// 1940_longest_common_subsequence_between_sorted_arrays

// https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Longest Common Subsequence Between Sorted Arrays.
// Memory Usage: 41.9 MB, less than 87.50% of TypeScript online submissions for Longest Common Subsequence Between Sorted Arrays.


function longestCommonSubsequence(arrays: number[][]): number[] {
  const arraysLen: number = arrays.length
  const numMap = new Map<number, number>()
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
