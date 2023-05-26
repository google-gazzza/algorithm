// https://leetcode.com/problems/factorial-trailing-zeroes/submissions/
// Runtime: 56 ms, faster than 90.32% of JavaScript online submissions for Factorial Trailing Zeroes.
// Memory Usage: 36.7 MB, less than 25.00% of JavaScript online submissions for Factorial Trailing Zeroes.
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    return n == 0 ? 0 : Math.floor(n / 5) + trailingZeroes(n / 5);
};