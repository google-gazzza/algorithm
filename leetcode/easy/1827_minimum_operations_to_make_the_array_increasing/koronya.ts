// [Easy] 1827. Minimum Operations to Make the Array Increasing
// 1827_minimum_operations_to_make_the_array_increasing

// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing
// Runtime: 76 ms, faster than 95.83% of TypeScript online submissions for Minimum Operations to Make the Array Increasing.
// Memory Usage: 40.8 MB, less than 66.67% of TypeScript online submissions for Minimum Operations to Make the Array Increasing.

function minOperations(nums: number[]): number {
  const numsLen: number = nums.length
  let result: number = 0
  let before: number = nums[0]
  for (let i: number = 1; i < numsLen; i += 1) {
    const num: number = nums[i]
    const diff: number = num > before ? 0 : before - num + 1
    result += diff
    before = num + diff
  }

  return result
}

minOperations([1, 1, 1]) //?
minOperations([1, 5, 2, 4, 1]) //?
minOperations([8]) //?
