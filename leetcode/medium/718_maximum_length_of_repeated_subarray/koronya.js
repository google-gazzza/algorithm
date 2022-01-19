// [Medium] 718. Maximum Length of Repeated Subarray
// 718_maximum_length_of_repeated_subarray

// https://leetcode.com/problems/maximum-length-of-repeated-subarray
// Runtime: 104 ms, faster than 100.00% of JavaScript online submissions for Maximum Length of Repeated Subarray.
// Memory Usage: 40.6 MB, less than 89.19% of JavaScript online submissions for Maximum Length of Repeated Subarray.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = function (nums1, nums2) {
  const nums1Len = nums1.length
  const nums2Len = nums2.length
  if (nums1Len === 0 || nums2Len === 0) {
    return 0
  }
  const arr = Array(nums2Len + 1).fill(0)
  let result = 0
  for (let i = nums1Len - 1; i >= 0; i -= 1 || 0) {
    for (let j = 0; j < nums2Len; j += 1 || 0) {
      arr[j] = nums1[i] === nums2[j] ? 1 + arr[j + 1] : 0
      result = Math.max(result, arr[j])
    }
  }

  return result
}

// Runtime: 4756 ms, faster than 6.30% of JavaScript online submissions for Maximum Length of Repeated Subarray.
// Memory Usage: 45.2 MB, less than 85.59% of JavaScript online submissions for Maximum Length of Repeated Subarray.
const findLength2 = function (nums1, nums2) {
  const nums1Len = nums1.length
  let result = 0
  const str2 = nums2.reduce((acc, cur) => `${acc}[${cur}]`, '')
  const isValid = (str) => str2.includes(str)
  const dfs = (str, next, count) => {
    if (isValid(str) === false) {
      return
    }
    result = Math.max(result, count)
    if (next < nums1Len) {
      dfs(str + `[${String(nums1[next])}]`, next + 1, count + 1)
    }
  }
  for (let i = 0; i < nums1Len; i += 1 || 0) {
    dfs(`[${String(nums1[i])}]`, i + 1, 1)
  }

  return result
}

findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]) //?
findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]) //?
findLength([70, 39, 25, 40, 7], [52, 20, 67, 5, 31]) //?
