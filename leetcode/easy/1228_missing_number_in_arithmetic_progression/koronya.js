// [Easy] 1228. Missing Number In Arithmetic Progression
// 1228_missing_number_in_arithmetic_progression

// https://leetcode.com/problems/missing-number-in-arithmetic-progression
// Runtime: 65 ms, faster than 82.35% of JavaScript online submissions for Missing Number In Arithmetic Progression.
// Memory Usage: 42.2 MB, less than 38.24% of JavaScript online submissions for Missing Number In Arithmetic Progression.

/**
 * @param {number[]} arr
 * @return {number}
 */
const missingNumber = function (arr) {
  let diffA = arr[1] - arr[0]
  let diffB = arr[2] - arr[1]
  let diff = diffA > 0 ? Math.min(diffA, diffB) : Math.max(diffA, diffB)
  const arrLen = arr.length
  const limit = arrLen - 1
  for (let i = 0; i < limit; i += 1 || 0) {
    if (arr[i + 1] - arr[i] !== diff) {
      return arr[i] + diff
    }
  }

  return diff === 0 ? arr[0] : -1
}

missingNumber([5, 7, 11, 13])
missingNumber([15, 13, 12])
missingNumber([0, 0, 0, 0, 0])
missingNumber([1, 1, 1])
