// https://leetcode.com/problems/add-digits
// Runtime: 60 ms, faster than 98.75% of JavaScript online submissions for Add Digits.
// Memory Usage: 36 MB, less than 66.67% of JavaScript online submissions for Add Digits.
const addDigits = num => {
  while (num > 9) {
    num = String(num).split('').reduce((acc, cur) => acc + Number(cur), 0)
  }

  return num
}
