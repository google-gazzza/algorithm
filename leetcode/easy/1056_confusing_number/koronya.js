// [Easy] 1056. Confusing Number
// 1056_confusing_number

// https://leetcode.com/problems/confusing-number
// Runtime: 60 ms, faster than 97.18% of JavaScript online submissions for Confusing Number.
// Memory Usage: 42.5 MB, less than 7.04% of JavaScript online submissions for Confusing Number.

const INVALID_ARR = ['2', '3', '4', '5', '7']

const transformObj = {
  0: '0',
  1: '1',
  6: '9',
  8: '8',
  9: '6',
}

/**
 * @param {number} n
 * @return {boolean}
 */
const confusingNumber = function (n) {
  const nArr = String(n).split('')
  if (nArr.some((item) => INVALID_ARR.includes(item) === true)) {
    return false
  }

  return nArr.reduceRight((acc, cur) => acc + transformObj[cur], '') !== String(n)
}

confusingNumber(6)
confusingNumber(89)
confusingNumber(11)
confusingNumber(26)
confusingNumber(916)
