// https://leetcode.com/problems/ugly-number/
// Runtime: 72 ms, faster than 60.22% of JavaScript online submissions for Ugly Number.
// Memory Usage: 35.6 MB, less than 33.33% of JavaScript online submissions for Ugly Number.

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num < 1)
        return false;
    let res = num;
    res = div(res, 2);
    res = div(res, 3);
    res = div(res, 5);
    return res === 1;
};

function div(n, d) {
    while (n % d === 0) {
        n = n / d;
    }
    return n;
}