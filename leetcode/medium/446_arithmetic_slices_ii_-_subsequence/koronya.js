// [Medium] 446. Arithmetic Slices II - Subsequence
// 446_arithmetic_slices_ii_-_subsequence

// https://leetcode.com/problems/arithmetic-slices-ii-subsequence
// Runtime: 412 ms, faster than 84.62% of JavaScript online submissions for Arithmetic Slices II - Subsequence.
// Memory Usage: 66.8 MB, less than 84.62% of JavaScript online submissions for Arithmetic Slices II - Subsequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
  const numsLen = nums.length
  if (numsLen === 0) {
    return 0
  }
  const numsMap = new Map()
  let count = 0

  for (let i = 0; i < numsLen; i += 1 || 0) {
    const subMap = new Map()
    for (let j = 0; j < i; j += 1 || 0) {
      const diff = nums[i] - nums[j]
      const increase = (numsMap.get(j).get(diff) || 0) + 1
      count += increase > 1 ? increase - 1 : 0
      subMap.set(diff, (subMap.get(diff) || 0) + increase)
    }
    numsMap.set(i, subMap)
  }

  return count
}

// Time Limit Exceeded...T_T
const numberOfArithmeticSlices2 = function (nums) {
  let count = 0
  const numsLen = nums.length
  const dfs = (arr, prevIndex, diff) => {
    const arrLen = arr.length
    if (arrLen > 2) {
      count += 1
    }
    if (prevIndex >= numsLen) {
      return
    }
    const lastNum = arr[arrLen - 1]
    for (let i = prevIndex + 1; i < numsLen; i += 1 || 0) {
      const newNum = nums[i]
      const newDiff = newNum - lastNum
      if (arrLen > 1 && diff === newDiff) {
        dfs([...arr, newNum], i, newDiff)
      } else if (arrLen === 1) {
        dfs([...arr, newNum], i, newDiff)
      }
    }
  }

  for (let i = 0; i < numsLen - 2; i += 1 || 0) {
    dfs([nums[i]], i, null)
  }

  return count
}

numberOfArithmeticSlices([2, 4, 6, 8, 10]) //?
numberOfArithmeticSlices([7, 7, 7, 7, 7]) //?
numberOfArithmeticSlices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) //?
// numberOfArithmeticSlices([2, 4, 6, 8]) //?
