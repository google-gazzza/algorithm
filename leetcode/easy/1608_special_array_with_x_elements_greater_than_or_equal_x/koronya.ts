// [Easy] 1608. Special Array With X Elements Greater Than or Equal X
// 1608_special_array_with_x_elements_greater_than_or_equal_x

// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Special Array With X Elements Greater Than or Equal X.
// Memory Usage: 40.2 MB, less than 75.00% of TypeScript online submissions for Special Array With X Elements Greater Than or Equal X.
function specialArray (nums: number[]): number {
  const numsLen: number = nums.length
  let lastMinIndex: number = 0
  const findGreaterEqualThenLen = (min: number): number => {
    for (let i: number = lastMinIndex; i < numsLen; i += 1) {
      if (nums[i] >= min) {
        lastMinIndex = i
        return numsLen - i
      }
    }
    return 0
  }
  nums.sort((a: number, b: number): number => a - b)

  for (let i: number = 0; i <= numsLen; i += 1) {
    if (findGreaterEqualThenLen(i) === i) {
      return i
    }
  }

  return -1
}
