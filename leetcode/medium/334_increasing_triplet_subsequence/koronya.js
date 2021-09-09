// [Medium] 334. Increasing Triplet Subsequence
// 334_increasing_triplet_subsequence

// https://leetcode.com/problems/increasing-triplet-subsequence
// Runtime: 84 ms, faster than 79.80% of JavaScript online submissions for Increasing Triplet Subsequence.
// Memory Usage: 52.4 MB, less than 66.45% of JavaScript online submissions for Increasing Triplet Subsequence.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
  const numsLen = nums.length
  let num1 = Number.MAX_SAFE_INTEGER
  let num2 = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const num = nums[i]
    if (num > num1 && num > num2) {
      return true
    }
    if (num > num1) {
      num2 = num
    } else {
      num1 = num
    }
  }

  return false
}

// TLE...
const increasingTriplet2 = function (nums) {
  const numsLen = nums.length
  let result = false
  const dfs = (arr, start) => {
    const arrLen = arr.length
    if (arrLen === 3) {
      result = true
      return
    }
    const lastNum = arr[arrLen - 1]
    for (let i = start; i < numsLen; i += 1 || 0) {
      const num = nums[i]
      if (num > lastNum) {
        dfs([...arr, num], i + 1)
      }
    }
  }
  for (let i = 0; i < numsLen - 2; i += 1 || 0) {
    if (result === false) {
      dfs([nums[i]], i + 1)
    }
  }

  return result
}

increasingTriplet([1, 2, 3, 4, 5]) //?
increasingTriplet([5, 4, 3, 2, 1]) //?
increasingTriplet([2, 1, 5, 0, 4, 6]) //?
