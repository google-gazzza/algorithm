// https://leetcode.com/problems/power-of-three/submissions/
// Runtime: 200 ms, faster than 87.28% of JavaScript online submissions for Power of Three.
// Memory Usage: 48.1 MB, less than 30.00% of JavaScript online submissions for Power of Three.
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return Math.log10(n) / Math.log10(3) % 1 === 0
};
