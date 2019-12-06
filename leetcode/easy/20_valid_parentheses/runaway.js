// https://leetcode.com/problems/valid-parentheses/
// Runtime: 52 ms, faster than 84.93% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 33.9 MB, less than 63.33% of JavaScript online submissions for Valid Parentheses.

const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
]);

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(s[i]);
        } else {
            const p = stack.pop();
            if (map.get(p) !== s[i]) return false;
        }
    }
    return stack.length === 0;
};

const assert = require('assert');
assert.equal(isValid('()'), true);
assert.equal(isValid('()[]{}'), true);
assert.equal(isValid('(]'), false);
assert.equal(isValid('([)]'), false);
assert.equal(isValid('{[]}'), true);
assert.equal(isValid(''), true);