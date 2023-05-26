// [Easy] 2229. Check if an Array Is Consecutive
// 2229_check_if_an_array_is_consecutive

// https://leetcode.com/problems/check-if-an-array-is-consecutive
// Runtime: 108 ms, faster than 100.00% of JavaScript online submissions for Check if an Array Is Consecutive.
// Memory Usage: 63.5 MB, less than 100.00% of JavaScript online submissions for Check if an Array Is Consecutive.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isConsecutive = function (nums) {
  const min = Math.min(...nums)
  const numsLen = nums.length
  const numsSet = new Set(nums)
  const end = min + numsLen - 1
  for (let i = min; i <= end; i += 1 || 0) {
    if (numsSet.has(i) === false) {
      return false
    }
  }

  return true
}

isConsecutive([1, 3, 4, 2])
isConsecutive([1, 3])
isConsecutive([3, 5, 4])
