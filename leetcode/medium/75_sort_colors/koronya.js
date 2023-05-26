// [Medium] 75. Sort Colors
// 75_sort_colors

// https://leetcode.com/problems/sort-colors
// Runtime: 76 ms, faster than 32.97% of JavaScript online submissions for Sort Colors.
// Memory Usage: 36.5 MB, less than 5.88% of JavaScript online submissions for Sort Colors.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// bubbleSort
const sortColors = nums => {
  const numsLen = nums.length
  let iterationCount = numsLen - 1
  while (iterationCount > 0) {
    for (let cursor = 0; cursor < iterationCount; cursor = cursor + 1 | 0) {
      const next = cursor + 1
      if (nums[cursor] > nums[next]) {
        [nums[cursor], nums[next]] = [nums[next], nums[cursor]]
      }
    }
    iterationCount -= 1
  }
}
