// [Medium] 2104. Sum of Subarray Ranges
// 2104_sum_of_subarray_ranges

// https://leetcode.com/problems/sum-of-subarray-ranges
// Runtime: 240 ms, faster than 19.14% of JavaScript online submissions for Sum of Subarray Ranges.
// Memory Usage: 49.1 MB, less than 5.26% of JavaScript online submissions for Sum of Subarray Ranges.

/**
 * @param {number[]} nums
 * @return {number}
 */
const subArrayRanges = function (nums) {
  const numsLen = nums.length
  let result = 0
  const dfs = (start, max, min) => {
    result += max - min
    if (start < numsLen - 1) {
      start += 1
      const num = nums[start]
      max = max > num ? max : num
      min = min < num ? min : num
      dfs(start, max, min)
    }
  }
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const num = nums[i]
    dfs(i, num, num)
  }

  return result
}

subArrayRanges([1, 2, 3])
subArrayRanges([1, 3, 3])
