// https://leetcode.com/problems/add-digits/
// Runtime: 68 ms, faster than 86.96% of JavaScript online submissions for Add Digits.
// Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Add Digits.

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
        num = getDigitsSum(num);
    }
    return num;
};

function getDigitsSum(num) {
    let sum = 0;
    while (num !== 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}