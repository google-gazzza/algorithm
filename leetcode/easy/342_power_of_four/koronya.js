// [Easy] 342. Power of Four
// 342_power_of_four

// https://leetcode.com/problems/power-of-four
// Runtime: 92 ms, faster than 84.80% of JavaScript online submissions for Power of Four.
// Memory Usage: 39.8 MB, less than 79.60% of JavaScript online submissions for Power of Four.

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
  let remainder = 0
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
