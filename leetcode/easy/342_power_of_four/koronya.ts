// [Easy] 342. Power of Four
// 342_power_of_four

// https://leetcode.com/problems/power-of-four
// Runtime: 100 ms, faster than 60.00% of TypeScript online submissions for Power of Four.
// Memory Usage: 40.1 MB, less than 86.67% of TypeScript online submissions for Power of Four.

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfFour(n: number): boolean {
  let remainder: number = 0
  while (n > 4) {
    n /= 4
    remainder = n % 4
    if (remainder !== 0) {
      return false
    }
  }

  return n === 1 || n === 4
}

isPowerOfFour(16) //?
isPowerOfFour(4) //?
isPowerOfFour(1) //?
isPowerOfFour(9) //?
isPowerOfFour(0) //?
isPowerOfFour(8) //?
isPowerOfFour(5) //?
isPowerOfFour(-4) //?
