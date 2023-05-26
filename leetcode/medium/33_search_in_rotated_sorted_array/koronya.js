// [Medium] 33. Search in Rotated Sorted Array
// 33_search_in_rotated_sorted_array

// https://leetcode.com/problems/search-in-rotated-sorted-array
// Runtime: 59 ms, faster than 94.66% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 42.1 MB, less than 71.05% of JavaScript online submissions for Search in Rotated Sorted Array.

const search = function (nums, target) {
  const numsLen = nums.length
  let left = 0
  let right = numsLen - 1
  while (left <= right) {
    let center = Math.floor((left + right) / 2)
    const centerVal = nums[center]
    if (centerVal === target) {
      return center
    }
    const leftVal = nums[left]
    if (leftVal <= centerVal) {
      if (target < centerVal && target >= leftVal) {
        right = center - 1
      } else {
        left = center + 1
      }
    }

    const rightVal = nums[right]
    if (centerVal <= rightVal) {
      if (target > centerVal && target <= rightVal) {
        left = center + 1
      } else {
        right = center - 1
      }
    }
  }

  return -1
}

const search2 = function (nums, target) {
  return nums.indexOf(target)
}

search([4, 5, 6, 7, 8, 1, 2, 3], 1) === 5
search([4, 5, 6, 7, 0, 1, 2], 0) === 4
search2([4, 5, 6, 7, 0, 1, 2], 0) === 4
search([1], 0) === -1
search([1], 1) === 0
search([1, 3], 3) === 1
search([3, 1], 3) === 0
