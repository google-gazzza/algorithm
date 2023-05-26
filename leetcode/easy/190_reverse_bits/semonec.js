// https://leetcode.com/problems/reverse-bits/submissions/
// Runtime: 64 ms, faster than 86.87% of JavaScript online submissions for Reverse Bits.
// Memory Usage: 35.9 MB, less than 66.67% of JavaScript online submissions for Reverse Bits.
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let reversed = n.toString(2).split('').reverse();
    // set it's length as 32
    while (reversed.length < 32) {
        reversed.push("0")
    }
    reversed = reversed.join('')

    return parseInt(reversed,2);
};