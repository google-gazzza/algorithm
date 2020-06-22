// [Medium] 215. Kth Largest Element in an Array
// 215_kth_largest_element_in_an_array

// https://leetcode.com/problems/kth-largest-element-in-an-array/
// Runtime: 68 ms, faster than 86.87% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 36 MB, less than 66.80% of JavaScript online submissions for Kth Largest Element in an Array.
const findKthLargest = (nums, k) => {
  nums.sort((a, b) => b - a)
  return nums[k - 1]
}
