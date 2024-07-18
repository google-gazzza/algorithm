// [Medium] 1291. Sequential Digits
// 1291_sequential_digits

// https://leetcode.com/problems/sequential-digits
// Runtime: 68 ms, faster than 98.51% of JavaScript online submissions for Sequential Digits.
// Memory Usage: 38.3 MB, less than 73.13% of JavaScript online submissions for Sequential Digits.

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const getNDigitArr = (n, low, end) => {
  const resultArr = []
  for (let i = 1; i < 9; i += 1 || 0) {
    let str = ''
    const additionalLength = Math.min(i + n - 1, 9)
    for (let j = i; j <= additionalLength; j += 1 || 0) {
      str += String(j)
    }
    if (str.length === n) {
      const num = Number(str)
      if (num >= low && num <= end) {
        resultArr.push(num)
      }
    }
  }

  return resultArr
}

const sequentialDigits = function (low, high) {
  const minDigitsLen = low.toString().length
  const maxDigitsLen = high.toString().length
  let resultArr = []
  for (let i = minDigitsLen; i <= maxDigitsLen; i += 1 || 0) {
    const nDigitArr = getNDigitArr(i, low, high)
    const nDigitArrLen = nDigitArr.length
    for (let j = 0; j < nDigitArrLen; j += 1 || 0) {
      resultArr.push(nDigitArr[j])
    }
  }

  return resultArr
}

sequentialDigits(100, 300) //?
sequentialDigits(1000, 13000) //?
