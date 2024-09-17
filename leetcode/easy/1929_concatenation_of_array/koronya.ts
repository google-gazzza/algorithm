// [Easy] 1929. Concatenation of Array
// 1929_concatenation_of_array

// https://leetcode.com/problems/concatenation-of-array
// Runtime: 92 ms, faster than 90.91% of TypeScript online submissions for Concatenation of Array.
// Memory Usage: 43.3 MB, less than 45.45% of TypeScript online submissions for Concatenation of Array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums]
}

getConcatenation([1, 2, 1]) //?
getConcatenation([1, 3, 2, 1]) //?
