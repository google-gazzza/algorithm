// [Easy] 1317. Convert Integer to the Sum of Two No-Zero Integers
// 1317_convert_integer_to_the_sum_of_two_no-zero_integers

// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers
// Runtime: 76 ms, faster than 84.85% of JavaScript online submissions for Convert Integer to the Sum of Two No-Zero Integers.
// Memory Usage: 38.8 MB, less than 86.87% of JavaScript online submissions for Convert Integer to the Sum of Two No-Zero Integers.

/**
 * @param {number} n
 * @return {number[]}
 */

const includeZero = (num) => num.toString().includes('0')
const getNoZeroIntegers = function (n) {
  for (let i = 1; i < n; i += 1 || 0) {
    const numA = i
    const numB = n - i
    if (includeZero(numA) === false && includeZero(numB) === false) {
      return [numA, numB]
    }
  }
  return []
}

getNoZeroIntegers(11) //?
