// [Medium] 912. Sort an Array
// 912_sort_an_array

// https://leetcode.com/problems/sort-an-array
// Runtime: 104 ms, faster than 95.15% of JavaScript online submissions for Sort an Array.
// Memory Usage: 44.7 MB, less than 52.16% of JavaScript online submissions for Sort an Array.
const sortArray = function (nums) {
  nums.sort((a, b) => a - b)

  return nums
}
