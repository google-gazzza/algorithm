// https://leetcode.com/problems/number-of-1-bits/submissions/
// Runtime: 60 ms, faster than 85.35% of JavaScript online submissions for Number of 1 Bits.
// Memory Usage: 34.9 MB, less than 30.00% of JavaScript online submissions for Number of 1 Bits.
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split('').filter(v=> v === '1').length;
};