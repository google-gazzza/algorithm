// [Easy] 1708. Largest Subarray Length K
// 1708_largest_subarray_length_k

// https://leetcode.com/problems/largest-subarray-length-k
// Runtime: 160 ms, faster than 57.69% of JavaScript online submissions for Largest Subarray Length K.
// Memory Usage: 59.7 MB, less than 50.00% of JavaScript online submissions for Largest Subarray Length K.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const largestSubarray = function (nums, k) {
  let max = 0
  let maxIndex = -1
  const numsLen = nums.length

  for (let i = 0; i < numsLen - k + 1; i += 1 || 0) {
    const num = nums[i]
    if (max < num) {
      max = num
      maxIndex = i
    }
  }

  return nums.slice(maxIndex, maxIndex + k)
}

largestSubarray([1, 4, 5, 2, 3], 3) //?
largestSubarray([1, 4, 5, 2, 3], 4) //?
largestSubarray([1, 4, 5, 2, 3], 1) //?
