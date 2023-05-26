// [Medium] 912. Sort an Array
// 912_sort_an_array

// https://leetcode.com/problems/sort-an-array
// Runtime: 96 ms, faster than 100.00% of TypeScript online submissions for Sort an Array.
// Memory Usage: 45.2 MB, less than 54.55% of TypeScript online submissions for Sort an Array.
function sortArray (nums: number[]): number[] {
  nums.sort((a: number, b: number): number => a - b)

  return nums
}
