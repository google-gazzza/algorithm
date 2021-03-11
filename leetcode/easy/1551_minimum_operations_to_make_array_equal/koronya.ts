// [Easy] 1551. Minimum Operations to Make Array Equal
// 1551_minimum_operations_to_make_array_equal

// https://leetcode.com/problems/minimum-operations-to-make-array-equal
// Runtime: 88 ms, faster than 60.00% of TypeScript online submissions for Minimum Operations to Make Array Equal.
// Memory Usage: 40.4 MB, less than 20.00% of TypeScript online submissions for Minimum Operations to Make Array Equal.

/**
 * @param {number} n
 * @return {number}
 */

const getNumber = (n: number): number => 2 * n - 1

function minOperations(n: number): number {
  const half: number = Math.ceil(n / 2)
  let count: number = 0
  for (let i = 0; i < half; i += 1 || 0) {
    count += n - getNumber(i + 1)
  }
  return count
}

minOperations(3) //?
minOperations(5) //?
minOperations(6) //?
