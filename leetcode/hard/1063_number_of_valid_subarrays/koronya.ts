// [Hard] 1063. Number of Valid Subarrays
// 1063_number_of_valid_subarrays

// https://leetcode.com/problems/number-of-valid-subarrays
// Runtime: 908 ms, faster than 33.33% of TypeScript online submissions for Number of Valid Subarrays.
// Memory Usage: 49.5 MB, less than 33.33% of TypeScript online submissions for Number of Valid Subarrays.

function validSubarrays(nums: number[]): number {
  let count: number = 0
  const numsLen = nums.length
  const dfs = (start: number, min: number, num: number) => {
    if (start >= numsLen) {
      return
    }
    if (num < min) {
      return
    }
    count += 1
    start += 1
    dfs(start, min, nums[start])
  }

  for (let i = 0; i < numsLen; i += 1 || 0) {
    dfs(i, nums[i], nums[i])
  }

  return count
}

validSubarrays([1, 4, 2, 5, 3]) //?
validSubarrays([3, 2, 1]) //?
validSubarrays([2, 2, 2]) //?
