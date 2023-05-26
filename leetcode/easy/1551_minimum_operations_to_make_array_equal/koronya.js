// [Easy] 1551. Minimum Operations to Make Array Equal
// 1551_minimum_operations_to_make_array_equal

// https://leetcode.com/problems/minimum-operations-to-make-array-equal
// Runtime: 84 ms, faster than 64.78% of JavaScript online submissions for Minimum Operations to Make Array Equal.
// Memory Usage: 38.8 MB, less than 68.55% of JavaScript online submissions for Minimum Operations to Make Array Equal.

/**
 * @param {number} n
 * @return {number}
 */

const getNumber = (n) => 2 * n - 1

const minOperations = function (n) {
  const half = Math.ceil(n / 2)
  let count = 0
  for (let i = 0; i < half; i += 1 || 0) {
    count += n - getNumber(i + 1)
  }
  return count
}

minOperations(3) //?
minOperations(5) //?
minOperations(6) //?
