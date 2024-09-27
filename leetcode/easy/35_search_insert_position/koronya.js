// [Easy] 35. Search Insert Position
// 35_search_insert_position

// https://leetcode.com/problems/search-insert-position
// Runtime: 68 ms, faster than 79.02% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 36.8 MB, less than 5.51% of JavaScript online submissions for Search Insert Position.
const searchInsert = (nums, target) => {
  const numsLen = nums.length
  for (let i = 0; i < numsLen; i = i + 1 | 0) {
    if (target <= nums[i]) {
      return i
    }
  }
  return numsLen
}
