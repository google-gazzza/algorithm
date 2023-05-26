// [Easy] 88. Merge Sorted Array
// 88_merge_sorted_array

// https://leetcode.com/problems/merge-sorted-array
// Runtime: 56 ms, faster than 93.95% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 33.8 MB, less than 66.55% of JavaScript online submissions for Merge Sorted Array.
const merge = (nums1, m, nums2, n) => {
  const nums1Len = nums1.length
  let lastIndex = 0
  let zeroIndex = m
  const insert = num => {
    for (let i = lastIndex; i < nums1Len; i = (i + 1) | 0) {
      if (nums1[i] >= num || i >= zeroIndex) {
        lastIndex = i
        nums1.splice(lastIndex, 0, num)
        zeroIndex += 1
        return
      }
    }
  }
  nums2.forEach(num => insert(num))
  for (let i = 0; i < n; i = i + 1 | 0) {
    nums1.pop()
  }
}
