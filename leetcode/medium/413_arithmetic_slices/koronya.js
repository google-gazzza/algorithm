// [Medium] 413. Arithmetic Slices
// 413_arithmetic_slices

// https://leetcode.com/problems/arithmetic-slices
// Runtime: 80 ms, faster than 46.02% of JavaScript online submissions for Arithmetic Slices.
// Memory Usage: 40.5 MB, less than 5.31% of JavaScript online submissions for Arithmetic Slices.

/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
  let count = 0
  const numsLen = nums.length

  const dfs = (arr, next, diff) => {
    const arrLen = arr.length
    if (arrLen > 2) {
      count += 1
    }
    if (next >= numsLen) {
      return
    }

    const newNum = nums[next]
    const lastNum = arr[arrLen - 1]
    const newDiff = newNum - lastNum
    if (arrLen > 1 && diff !== newDiff) {
      return
    }
    dfs([...arr, newNum], next + 1, newDiff)
  }

  for (let i = 0; i < numsLen - 2; i += 1 || 0) {
    dfs([nums[i]], i + 1, null)
  }

  return count
}

// numberOfArithmeticSlices([1, 2, 3, 4]) //?
numberOfArithmeticSlices([1, 2, 3, 4, 5]) //?
