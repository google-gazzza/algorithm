// [Easy] 1827. Minimum Operations to Make the Array Increasing
// 1827_minimum_operations_to_make_the_array_increasing

// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing
// Runtime: 72 ms, faster than 97.75% of JavaScript online submissions for Minimum Operations to Make the Array Increasing.
// Memory Usage: 40.4 MB, less than 77.90% of JavaScript online submissions for Minimum Operations to Make the Array Increasing.

/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function (nums) {
  const numsLen = nums.length
  let result = 0
  let before = nums[0]
  for (let i = 1; i < numsLen; i += 1 || 0) {
    const num = nums[i]
    const diff = num > before ? 0 : before - num + 1
    result += diff
    before = num + diff
  }

  return result
}

minOperations([1, 1, 1]) //?
minOperations([1, 5, 2, 4, 1]) //?
minOperations([8]) //?
