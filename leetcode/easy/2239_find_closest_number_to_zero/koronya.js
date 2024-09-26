// [Easy] 2239. Find Closest Number to Zero
// 2239_find_closest_number_to_zero

// https://leetcode.com/problems/find-closest-number-to-zero
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Find Closest Number to Zero.
// Memory Usage: 44.1 MB, less than 100.00% of JavaScript online submissions for Find Closest Number to Zero.

/**
 * @param {number[]} nums
 * @return {number}
 */
const findClosestNumber = function (nums) {
  const numsLen = nums.length
  let min = Number.MAX_SAFE_INTEGER
  let absMin = Math.abs(min)
  for (let i = 0; i < numsLen; i += 1 || 0) {
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

findClosestNumber([-4, -2, 1, 4, 8])
findClosestNumber([2, -1, 1])
