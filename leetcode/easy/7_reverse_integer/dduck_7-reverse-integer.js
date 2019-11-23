// https://leetcode.com/problems/reverse-integer/
// Runtime: 72 ms, faster than 79.95% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 35.9 MB, less than 55.21% of JavaScript online submissions for Reverse Integer.

const getReverseValue = (x) => parseInt(`${x}`.split('').reverse().join(''), 10) * (x > 0 ? 1 : -1);
const reverse = (x) => {
  const reverseValue = getReverseValue(x);
  return Math.abs(reverseValue) < (2 ** 31) - 1 ? reverseValue : 0;
};

const x = 1534236469;
console.log(reverse(x));
const x2 = -2147483648;
console.log(reverse(x2));
const x3 = 1563847412;
console.log(reverse(x3));
console.log(2 ** 31);
