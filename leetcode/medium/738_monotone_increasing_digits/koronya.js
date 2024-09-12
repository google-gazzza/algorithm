// [Medium] 738. Monotone Increasing Digits
// 738_monotone_increasing_digits

// https://leetcode.com/problems/monotone-increasing-digits
// Runtime: 79 ms, faster than 56.52% of JavaScript online submissions for Monotone Increasing Digits.
// Memory Usage: 42.8 MB, less than 17.39% of JavaScript online submissions for Monotone Increasing Digits.

const getNumber = (arr) => arr.reduce((acc, cur) => acc + String(cur), '')

/**
 * @param {number} n
 * @return {number}
 */
const monotoneIncreasingDigits = function (n) {
  const nArr = String(n)
    .split('')
    .map((item) => Number(item))
  const nArrLen = nArr.length
  if (nArrLen === 1) {
    return n
  }
  let endIndex = nArrLen - 1
  for (let i = nArrLen - 1; i > 0; i -= 1 || 0) {
    if (nArr[i] < nArr[i - 1]) {
      endIndex = i - 1
      nArr[i - 1] -= 1
    }
  }

  return Number(getNumber(nArr.slice(0, endIndex + 1)) + '9'.repeat(nArrLen - 1 - endIndex))
}

monotoneIncreasingDigits(10)
monotoneIncreasingDigits(1234)
monotoneIncreasingDigits(1231)
monotoneIncreasingDigits(332)
