// [Easy] 191. Number of 1 Bits
// 191_number_of_1_bits

// https://leetcode.com/problems/number-of-1-bits
// Runtime: 88 ms, faster than 91.30% of TypeScript online submissions for Number of 1 Bits.
// Memory Usage: 40.5 MB, less than 57.97% of TypeScript online submissions for Number of 1 Bits.

function hammingWeight(n: number): number {
  return n
    .toString(2)
    .split('')
    .filter((item) => item === '1').length
}

hammingWeight(11) //?
