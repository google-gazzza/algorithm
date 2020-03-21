// https://leetcode.com/problems/add-binary/
// Runtime: 52 ms, faster than 98.48% of JavaScript online submissions for Add Binary.
// Memory Usage: 34.1 MB, less than 85.71% of JavaScript online submissions for Add Binary.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (BigInt('0b'+a)+BigInt('0b'+b)).toString(2);
};