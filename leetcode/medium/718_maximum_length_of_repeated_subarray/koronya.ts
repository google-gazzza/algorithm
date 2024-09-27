// [Medium] 718. Maximum Length of Repeated Subarray
// 718_maximum_length_of_repeated_subarray

// https://leetcode.com/problems/maximum-length-of-repeated-subarray
// Runtime: 146 ms, faster than 100.00% of TypeScript online submissions for Maximum Length of Repeated Subarray.
// Memory Usage: 40.4 MB, less than 100.00% of TypeScript online submissions for Maximum Length of Repeated Subarray.

function findLength(nums1: number[], nums2: number[]): number {
  const nums1Len = nums1.length
  const nums2Len = nums2.length
  if (nums1Len === 0 || nums2Len === 0) {
    return 0
  }
  const arr: number[] = Array(nums2Len + 1).fill(0)
  let result: number = 0
  for (let i: number = nums1Len - 1; i >= 0; i -= 1) {
    for (let j: number = 0; j < nums2Len; j += 1) {
      arr[j] = nums1[i] === nums2[j] ? 1 + arr[j + 1] : 0
      result = Math.max(result, arr[j])
    }
  }

  return result
}
