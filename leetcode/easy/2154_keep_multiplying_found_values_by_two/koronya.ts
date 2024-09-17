// [Easy] 2154. Keep Multiplying Found Values by Two
// 2154_keep_multiplying_found_values_by_two

// https://leetcode.com/problems/keep-multiplying-found-values-by-two
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Keep Multiplying Found Values by Two.
// Memory Usage: 44.5 MB, less than 100.00% of TypeScript online submissions for Keep Multiplying Found Values by Two.

function findFinalValue(nums: number[], original: number): number {
  let result = original
  nums.sort((a, b) => a - b)
  nums.forEach((num) => {
    if (num === result) {
      result *= 2
    }
  })
  return result
}
