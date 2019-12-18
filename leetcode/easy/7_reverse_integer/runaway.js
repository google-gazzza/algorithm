// https://leetcode.com/problems/reverse-integer/
// Runtime: 60 ms, faster than 99.02% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 35.5 MB, less than 92.71% of JavaScript online submissions for Reverse Integer.

const MAX = 2**31-1;
const MIN = -(2**31);

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x < 0 ? -1 : 1;
    x = x * sign;
    let result = 0;
    while (x > 0) {
        const n = x % 10;
        result = result * 10 + n;
        x = Math.floor(x / 10);
    }
    result = result * sign;
    return result > MAX || result < MIN ? 0 : result;
};

const assert = require('assert');
assert.equal(reverse(123), 321);
assert.equal(reverse(-123), -321);
assert.equal(reverse(120), 21);
assert.equal(reverse(1534236469), 0);
assert.equal(reverse(-1534236469), 0);
