// [Easy] 2057. Smallest Index With Equal Value
// 2057_smallest_index_with_equal_value

// https://leetcode.com/problems/smallest-index-with-equal-value
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Smallest Index With Equal Value.
// Memory Usage: 40.7 MB, less than 100.00% of TypeScript online submissions for Smallest Index With Equal Value.

const MOD = 10

function smallestEqual(nums: number[]): number {
  const numsLen = nums.length
  for (let i: number = 0; i < numsLen; i += 1) {
    if (i % MOD === nums[i]) {
      return i
    }
  }
  return -1
}

smallestEqual([0, 1, 2]) //?
smallestEqual([4, 3, 2, 1]) //?
smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //?
smallestEqual([2, 1, 3, 5, 2]) //?
