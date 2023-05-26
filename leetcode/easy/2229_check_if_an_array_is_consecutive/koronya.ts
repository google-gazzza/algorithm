// [Easy] 2229. Check if an Array Is Consecutive
// 2229_check_if_an_array_is_consecutive

// https://leetcode.com/problems/check-if-an-array-is-consecutive
// Runtime: 162 ms, faster than 100.00% of TypeScript online submissions for Check if an Array Is Consecutive.
// Memory Usage: 59.4 MB, less than 100.00% of TypeScript online submissions for Check if an Array Is Consecutive.

function isConsecutive(nums: number[]): boolean {
  const min = Math.min(...nums)
  const numsLen = nums.length
  const numsSet = new Set(nums)
  const end = min + numsLen - 1
  for (let i: number = min; i <= end; i += 1) {
    if (numsSet.has(i) === false) {
      return false
    }
  }

  return true
}
