// https://leetcode.com/problems/binary-number-with-alternating-bits/
// Runtime: 60 ms, faster than 40.00% of JavaScript online submissions for Binary Number with Alternating Bits.
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Binary Number with Alternating Bits.

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let prev = -1;
    while (n !== 0) {
        const now = n & 1;
        if (prev === now)
            return false;
        prev = now;
        n = n >> 1;
    }
    return true;
};