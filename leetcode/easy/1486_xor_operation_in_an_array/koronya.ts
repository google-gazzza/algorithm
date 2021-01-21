// [Easy] 1486. XOR Operation in an Array
// 1486_xor_operation_in_an_array

// https://leetcode.com/problems/xor-operation-in-an-array
// Runtime: 84 ms, faster than 63.64% of TypeScript online submissions for XOR Operation in an Array.
// Memory Usage: 39.1 MB, less than 77.27% of TypeScript online submissions for XOR Operation in an Array.

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
function xorOperation(n: number, start: number): number {
  let prev: number = start
  let result: number = prev
  for (let i: number = 1; i < n; i += 1 || 0) {
    prev += 2
    result ^= prev
  }

  return result
}

xorOperation(5, 0) //?
xorOperation(4, 3) //?
xorOperation(1, 7) //?
xorOperation(10, 5) //?
