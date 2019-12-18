// https://leetcode.com/problems/palindrome-number/
// Runtime: 196 ms, faster than 60.91% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 44.4 MB, less than 100.00% of JavaScript online submissions for Palindrome Number.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let arr = [];
    while (x > 0) {
        arr.push(x % 10);
        x = Math.floor(x / 10);
    }
    
    const half = Math.floor(arr.length / 2);
    for (let i = 0; i < half; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            return false;
        }
    }
    return true;
};

const assert = require('assert');
assert.equal(isPalindrome(121), true);
assert.equal(isPalindrome(-121), false);
assert.equal(isPalindrome(10), false);

assert.equal(isPalindrome(0), true);
assert.equal(isPalindrome(9999999999), true);