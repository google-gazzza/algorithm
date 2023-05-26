// [Medium] 2104. Sum of Subarray Ranges
// 2104_sum_of_subarray_ranges

// https://leetcode.com/problems/sum-of-subarray-ranges
// Runtime: 224 ms, faster than 24.00% of TypeScript online submissions for Sum of Subarray Ranges.
// Memory Usage: 50.5 MB, less than 12.00% of TypeScript online submissions for Sum of Subarray Ranges.

function subArrayRanges(nums: number[]): number {
  const numsLen = nums.length
  let result: number = 0
  const dfs = (start: number, max: number, min: number) => {
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
