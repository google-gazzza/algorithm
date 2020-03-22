// https://leetcode.com/problems/add-digits/

// Runtime: 72 ms, faster than 80.19% of JavaScript online submissions for Add Digits.
// Memory Usage: 36.1 MB, less than 66.67% of JavaScript online submissions for Add Digits.
// Runtime: 84 ms, faster than 26.57% of JavaScript online submissions for Add Digits.
// Memory Usage: 36.1 MB, less than 66.67% of JavaScript online submissions for Add Digits.

const addDigits = (num) => (num < 10 ? num
  : addDigits(num.toString().split('').reduce((acc, cur) => acc + parseInt(cur, 10), 0)));

console.log(addDigits(38));
//?
