// https://leetcode.com/problems/ugly-number
// Runtime: 72 ms, faster than 63.77% of JavaScript online submissions for Ugly Number.
// Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Ugly Number.
const isUgly = num => {
  if (num === 0) {
    return false
  }
  let target = num
  while (true) {
    if (target === 1) {
      return true
    }
    if (target % 2 === 0) {
      target /= 2
    } else if (target % 3 === 0) {
      target /= 3
    } else if (target % 5 === 0) {
      target /= 5
    } else {
      return false
    }
  }
}
