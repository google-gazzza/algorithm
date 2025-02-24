// [Medium] 360. Sort Transformed Array
// 360_sort_transformed_array

// https://leetcode.com/problems/sort-transformed-array
// Runtime: 110 ms, faster than 75.00% of TypeScript online submissions for Sort Transformed Array.
// Memory Usage: 44.6 MB, less than 25.00% of TypeScript online submissions for Sort Transformed Array.

function sortTransformedArray(nums: number[], a: number, b: number, c: number): number[] {
  return nums.map((num) => num * num * a + num * b + c).sort((a, b) => a - b)
}
