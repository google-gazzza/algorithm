// [Easy] 191. Number of 1 Bits
// 191_number_of_1_bits

// https://leetcode.com/problems/number-of-1-bits
// Runtime: 84 ms, faster than 89.73% of JavaScript online submissions for Number of 1 Bits.
// Memory Usage: 40.5 MB, less than 18.15% of JavaScript online submissions for Number of 1 Bits.

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  return n
    .toString(2)
    .split('')
    .filter((item) => item === '1').length
}

hammingWeight(11) //?
