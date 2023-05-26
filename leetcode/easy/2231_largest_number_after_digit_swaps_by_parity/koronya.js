// [Easy] 2231. Largest Number After Digit Swaps by Parity
// 2231_largest_number_after_digit_swaps_by_parity

// https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity
// Runtime: 56 ms, faster than 96.62% of JavaScript online submissions for Largest Number After Digit Swaps by Parity.
// Memory Usage: 43.9 MB, less than 24.89% of JavaScript online submissions for Largest Number After Digit Swaps by Parity.

const descSort = (a, b) => b - a

/**
 * @param {number} num
 * @return {number}
 */
const largestInteger = function (num) {
  const oddArr = []
  const evenArr = []
  const oddIndexArr = []
  const evenIndexArr = []
  const strArr = String(num).split('')
  const numLen = strArr.length
  for (let i = 0; i < numLen; i += 1 || 0) {
    const number = Number(strArr[i])
    if (number % 2 === 0) {
      oddArr.push(number)
      oddIndexArr.push(i)
    } else {
      evenArr.push(number)
      evenIndexArr.push(i)
    }
  }

  const resultArr = Array.from({ length: numLen }).map((_) => 0)
  oddArr.sort(descSort)
  evenArr.sort(descSort)
  oddArr.forEach((num, index) => {
    resultArr[oddIndexArr[index]] = num
  })
  evenArr.forEach((num, index) => {
    resultArr[evenIndexArr[index]] = num
  })

  return Number(resultArr.reduce((acc, cur) => acc + String(cur), ''))
}

largestInteger(1234)
largestInteger(65875)
largestInteger(247)
