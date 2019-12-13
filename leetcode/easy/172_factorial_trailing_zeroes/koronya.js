// https://leetcode.com/problems/factorial-trailing-zeroes
// Runtime: 56 ms, faster than 88.94% of JavaScript online submissions for Factorial Trailing Zeroes.
// Memory Usage: 34 MB, less than 75.00% of JavaScript online submissions for Factorial Trailing Zeroes.
const trailingZeroes = n => {
  let count = 0
  let divider = 5
  while (divider <= n) {
    count += Math.floor(n / divider)
    divider *= 5
  }

  return count
}
