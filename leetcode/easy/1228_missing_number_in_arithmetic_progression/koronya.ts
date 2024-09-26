// [Easy] 1228. Missing Number In Arithmetic Progression
// 1228_missing_number_in_arithmetic_progression

// https://leetcode.com/problems/missing-number-in-arithmetic-progression
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Missing Number In Arithmetic Progression.
// Memory Usage: 43.1 MB, less than 50.00% of TypeScript online submissions for Missing Number In Arithmetic Progression.

function missingNumber(arr: number[]): number {
  let diffA = arr[1] - arr[0]
  let diffB = arr[2] - arr[1]
  let diff = diffA > 0 ? Math.min(diffA, diffB) : Math.max(diffA, diffB)
  const arrLen = arr.length
  const limit = arrLen - 1
  for (let i: number = 0; i < limit; i += 1) {
    if (arr[i + 1] - arr[i] !== diff) {
      return arr[i] + diff
    }
  }

  return diff === 0 ? arr[0] : -1
}
