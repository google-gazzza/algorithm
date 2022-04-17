// [Easy] 2239. Find Closest Number to Zero
// 2239_find_closest_number_to_zero

// https://leetcode.com/problems/find-closest-number-to-zero
// Runtime: 62 ms, faster than 100.00% of TypeScript online submissions for Find Closest Number to Zero.
// Memory Usage: 45.8 MB, less than 100.00% of TypeScript online submissions for Find Closest Number to Zero.

function findClosestNumber(nums: number[]): number {
  const numsLen = nums.length
  let min = Number.MAX_SAFE_INTEGER
  let absMin = Math.abs(min)
  for (let i: number = 0; i < numsLen; i += 1) {
    const num = nums[i]
    const absNum = Math.abs(num)
    if (absNum < absMin) {
      min = num
      absMin = absNum
    } else if (absNum === absMin && num > 0) {
      min = num
    }
  }

  return min
}
