// [Easy] 27. Remove Element
// 27_remove_element

// https://leetcode.com/problems/remove-element
// Runtime: 72 ms, faster than 83.16% of JavaScript online submissions for Remove Element.
// Memory Usage: 39 MB, less than 36.68% of JavaScript online submissions for Remove Element.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let count = 0
  let index = 0
  const numsLen = nums.length
  for (let i = 0; i < numsLen; i += 1 || 0) {
    if (nums[i] !== val) {
      nums[index] = nums[i]
      index += 1
    } else {
      count += 1
    }
  }
  return numsLen - count
}

// removeElement([3, 2, 2, 3], 3) //?
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) //?
