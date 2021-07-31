// [Easy] 1945. Sum of Digits of String After Convert
// 1945_sum_of_digits_of_string_after_convert

// https://leetcode.com/problems/sum-of-digits-of-string-after-convert
// Runtime: 64 ms, faster than 99.45% of JavaScript online submissions for Sum of Digits of String After Convert.
// Memory Usage: 40.4 MB, less than 90.61% of JavaScript online submissions for Sum of Digits of String After Convert.

const CHAR_CODE_OF_A = 'a'.charCodeAt(0) //?
const getCharCode = (str) => str.charCodeAt(0) - CHAR_CODE_OF_A + 1
const getSum = (acc, cur) => Number(acc) + Number(cur)

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = function (s, k) {
  let resultStr = s.split('').reduce((acc, cur) => acc + getCharCode(cur), '')
  while (k > 0) {
    resultStr = String(resultStr.split('').reduce(getSum, 0))
    k -= 1
  }

  return Number(resultStr)
}

getLucky('iiii', 1) //?
getLucky('leetcode', 2) //?
getLucky('zbax', 2) //?
