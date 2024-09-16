// [Easy] 704. Binary Search
// 704_binary_search

// https://leetcode.com/problems/binary-search
// Runtime: 84 ms, faster than 60.99% of TypeScript online submissions for Binary Search.
// Memory Usage: 42.7 MB, less than 67.38% of TypeScript online submissions for Binary Search.

function search(nums: number[], target: number): number {
  let left: number = 0
  let right: number = nums.length - 1
  while (left < right) {
    const center: number = left + ~~((right - left + 1) / 2)
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
