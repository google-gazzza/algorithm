// [Easy] 2154. Keep Multiplying Found Values by Two
// 2154_keep_multiplying_found_values_by_two

// https://leetcode.com/problems/keep-multiplying-found-values-by-two
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Keep Multiplying Found Values by Two.
// Memory Usage: 44.3 MB, less than 100.00% of JavaScript online submissions for Keep Multiplying Found Values by Two.

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = function (nums, original) {
  let result = original
  nums.sort((a, b) => a - b)
  nums.forEach((num) => {
    if (num === result) {
      result *= 2
    }
  })
  return result
}

findFinalValue([5, 3, 6, 1, 12], 3)
findFinalValue([2, 7, 9], 4)
findFinalValue([8, 19, 4, 2, 15, 3], 2)
