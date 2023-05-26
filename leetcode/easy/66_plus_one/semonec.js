// https://leetcode.com/problems/plus-one/submissions/
// Runtime: 48 ms, faster than 95.25% of JavaScript online submissions for Plus One.
// Memory Usage: 33.8 MB, less than 59.57% of JavaScript online submissions for Plus One.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = [];
    let carry = 0;
    while (digits.length) {
        let pop = digits.pop();
        if (result.length === 0)
            pop++;
        pop += carry;
        if (pop >= 10) {
            carry = 1;
            pop %= 10;
        } else {
            carry = 0;
        }
        result.push(pop);
    }
    if (carry)
        result.push(carry);
    return result.reverse();
};