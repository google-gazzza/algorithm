// [Easy] 1480. Running Sum of 1d Array
// 1480_running_sum_of_1d_array

// https://leetcode.com/problems/running-sum-of-1d-array
// Runtime: 88 ms, faster than 17.94% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Running Sum of 1d Array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = nums => {
  let sum = 0
  return nums.map(num => {
    sum += num
    return sum
  })
}
