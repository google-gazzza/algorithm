// [Easy] 1708. Largest Subarray Length K
// 1708_largest_subarray_length_k

// https://leetcode.com/problems/largest-subarray-length-k
// Runtime: 176 ms, faster than 100.00% of TypeScript online submissions for Largest Subarray Length K.
// Memory Usage: 61.2 MB, less than 100.00% of TypeScript online submissions for Largest Subarray Length K.

function largestSubarray(nums: number[], k: number): number[] {
  let max: number = 0
  let maxIndex: number = -1
  const numsLen: number = nums.length

  for (let i: number = 0; i < numsLen - k + 1; i += 1) {
    const num: number = nums[i]
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
