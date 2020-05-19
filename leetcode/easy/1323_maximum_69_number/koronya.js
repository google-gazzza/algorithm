// https://leetcode.com/problems/maximum-69-number/
// Runtime: 64 ms, faster than 12.68% of JavaScript online submissions for Maximum 69 Number.
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Maximum 69 Number.
const maximum69Number = num => {
  let change = false
  const mergedStr = String(num).split('').reduce((acc, cur) => {
    if (change === false && cur === '6') {
      change = true
      return acc + '9'
    }
    return acc + cur
  }, '')
  return Number(mergedStr)
}

// Runtime: 76 ms, faster than 8.11% of JavaScript online submissions for Maximum 69 Number.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Maximum 69 Number.
const maximum69Number2 = num => Number(String(num).replace('6', '9'))
