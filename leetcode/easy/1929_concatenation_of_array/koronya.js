// [Easy] 1929. Concatenation of Array
// 1929_concatenation_of_array

// https://leetcode.com/problems/concatenation-of-array
// Runtime: 88 ms, faster than 88.26% of JavaScript online submissions for Concatenation of Array.
// Memory Usage: 42.5 MB, less than 36.15% of JavaScript online submissions for Concatenation of Array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = (nums) => [...nums, ...nums]

getConcatenation([1, 2, 1]) //?
getConcatenation([1, 3, 2, 1]) //?
