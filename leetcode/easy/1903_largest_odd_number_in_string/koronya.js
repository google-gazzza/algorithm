// [Easy] 1903. Largest Odd Number in String
// 1903_largest_odd_number_in_string

// https://leetcode.com/problems/largest-odd-number-in-string
// Runtime: 76 ms, faster than 96.26% of JavaScript online submissions for Largest Odd Number in String.
// Memory Usage: 42.7 MB, less than 80.46% of JavaScript online submissions for Largest Odd Number in String.

/**
 * @param {string} num
 * @return {string}
 */
const largestOddNumber = function (num) {
  let lastOddIndex = -1
  for (let i = num.length - 1; i >= 0; i -= 1 || 0) {
    if (Number(num[i]) % 2 === 1) {
      lastOddIndex = i
      break
    }
  }
  return lastOddIndex === -1 ? '' : num.substring(0, lastOddIndex + 1)
}

largestOddNumber('52') //?
largestOddNumber('25') //?
largestOddNumber('572') //?
largestOddNumber('4206') //?
largestOddNumber('35427') //?
