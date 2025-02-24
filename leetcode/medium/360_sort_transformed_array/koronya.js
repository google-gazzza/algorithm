// [Medium] 360. Sort Transformed Array
// 360_sort_transformed_array

// https://leetcode.com/problems/sort-transformed-array
// Runtime: 67 ms, faster than 100.00% of JavaScript online submissions for Sort Transformed Array.
// Memory Usage: 43.8 MB, less than 18.97% of JavaScript online submissions for Sort Transformed Array.

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const sortTransformedArray = function (nums, a, b, c) {
  return nums.map((num) => num * num * a + num * b + c).sort((a, b) => a - b)
}

sortTransformedArray([-4, -2, 2, 4], 1, 3, 5)
sortTransformedArray([-4, -2, 2, 4], -1, 3, 5)
