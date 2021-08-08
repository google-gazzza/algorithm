// [Easy] 704. Binary Search
// 704_binary_search

// https://leetcode.com/problems/binary-search
// Runtime: 68 ms, faster than 97.56% of JavaScript online submissions for Binary Search.
// Memory Usage: 42.7 MB, less than 11.40% of JavaScript online submissions for Binary Search.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const center = left + ~~((right - left + 1) / 2)
    if (target < nums[center]) {
      right = center - 1
    } else {
      left = center
    }
  }

  return target === nums[left] ? left : -1
}

search([-1, 0, 3, 5, 9, 12], 9) //?
search([-1, 0, 3, 5, 9, 12], 2) //?
