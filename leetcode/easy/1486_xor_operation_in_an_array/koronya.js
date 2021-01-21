// [Easy] 1486. XOR Operation in an Array
// 1486_xor_operation_in_an_array

// https://leetcode.com/problems/xor-operation-in-an-array
// Runtime: 76 ms, faster than 77.68% of JavaScript online submissions for XOR Operation in an Array.
// Memory Usage: 38.4 MB, less than 57.60% of JavaScript online submissions for XOR Operation in an Array.

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let prev = start
  let result = prev
  for (let i = 1; i < n; i += 1 || 0) {
    prev += 2
    result ^= prev
  }

  return result
}

xorOperation(5, 0) //?
xorOperation(4, 3) //?
xorOperation(1, 7) //?
xorOperation(10, 5) //?
