// [Medium] 33. Search in Rotated Sorted Array
// 33_search_in_rotated_sorted_array

// https://leetcode.com/problems/search-in-rotated-sorted-array
// Runtime: 82 ms, faster than 64.44% of TypeScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 44.1 MB, less than 85.66% of TypeScript online submissions for Search in Rotated Sorted Array.

function search(nums: number[], target: number): number {
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
