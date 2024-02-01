// https://leetcode.com/problems/integer-to-roman/
// Runtime: 124 ms, faster than 97.23% of JavaScript online submissions for Integer to Roman.
// Memory Usage: 39.7 MB, less than 90.00% of JavaScript online submissions for Integer to Roman.

const data = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'],
    [1, 'I']
];

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = '';
    for (let [k, symbol] of data) {
        while (num >= k) {
            num -= k;
            result += symbol;
        }
    }
    return result;
};