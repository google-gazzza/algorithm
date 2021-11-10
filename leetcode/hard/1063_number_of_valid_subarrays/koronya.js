// [Hard] 1063. Number of Valid Subarrays
// 1063_number_of_valid_subarrays

// https://leetcode.com/problems/number-of-valid-subarrays
// Runtime: 952 ms, faster than 16.67% of JavaScript online submissions for Number of Valid Subarrays.
// Memory Usage: 48.8 MB, less than 33.33% of JavaScript online submissions for Number of Valid Subarrays.

/**
 * @param {number[]} nums
 * @return {number}
 */
const validSubarrays = function (nums) {
  let count = 0
  const numsLen = nums.length
  const dfs = (start, min, num) => {
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
