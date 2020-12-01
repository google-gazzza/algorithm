// [Easy] 1608. Special Array With X Elements Greater Than or Equal X
// 1608_special_array_with_x_elements_greater_than_or_equal_x

// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x
// 조금 더 빠르게 수정한 풀이
// Runtime: 72 ms, faster than 94.85% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
// Memory Usage: 38.9 MB, less than 48.04% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
const specialArray = function (nums) {
  const numsLen = nums.length
  let lastMinIndex = 0
  const findGreaterEqualThenLen = (min) => {
    for (let i = lastMinIndex; i < numsLen; i += 1 || 0) {
      if (nums[i] >= min) {
        lastMinIndex = i
        return numsLen - i
      }
    }
    return 0
  }
  nums.sort((a, b) => a - b)

  for (let i = 0; i <= numsLen; i += 1 || 0) {
    if (findGreaterEqualThenLen(i) === i) {
      return i
    }
  }

  return -1
}


// 무식한 첫번째 풀이
// Runtime: 84 ms, faster than 47.30% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
// Memory Usage: 42.7 MB, less than 6.37% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
const specialArray2 = function (nums) {
  const numsLen = nums.length
  for (let i = 0; i <= numsLen; i += 1 || 0) {
    if (i === nums.filter(num => num >= i).length) {
      return i
    }
  }

  return -1
}
