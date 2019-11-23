// https://leetcode.com/problems/roman-to-integer/
// Runtime: 140 ms, faster than 77.24% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 39.8 MB, less than 51.06% of JavaScript online submissions for Roman to Integer.

const valueMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
]);

const targetMap = new Map([
    ['I', ['V', 'X']],
    ['X', ['L', 'C']],
    ['C', ['D', 'M']]
]);

const checkTarget = function (s, i) {
    return s.length > i + 1 && targetMap.has(s[i]) && targetMap.get(s[i]).includes(s[i + 1]);
}

/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = function(s) {
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
        const sign = checkTarget(s, i) ? -1 : 1;
        sum += sign * valueMap.get(s[i]);
    }
    return sum;
};

const assert = require('assert');

assert.equal(romanToInt('III'), 3);
assert.equal(romanToInt('IV'), 4);
assert.equal(romanToInt('IX'), 9);
assert.equal(romanToInt('LVIII'), 58);
assert.equal(romanToInt('MCMXCIV'), 1994);