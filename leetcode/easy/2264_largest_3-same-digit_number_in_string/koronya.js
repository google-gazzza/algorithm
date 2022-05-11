// [Easy] 2264. Largest 3-Same-Digit Number in String
// 2264_largest_3-same-digit_number_in_string

// https://leetcode.com/problems/largest-3-same-digit-number-in-string
// Runtime: 71 ms, faster than 84.74% of JavaScript online submissions for Largest 3-Same-Digit Number in String.
// Memory Usage: 42.6 MB, less than 85.94% of JavaScript online submissions for Largest 3-Same-Digit Number in String.

/**
 * @param {string} num
 * @return {string}
 */
const largestGoodInteger = function (num) {
  const candidateArr = []
  const numLen = num.length
  let beforeCount = 1
  let before = num[0]
  for (let i = 1; i < numLen; i += 1 || 0) {
    const n = num[i]
    if (before === n) {
      beforeCount += 1
    } else {
      beforeCount = 1
    }
    before = n
    if (beforeCount === 3) {
      candidateArr.push(Number(n))
    }
  }
  const max = Math.max(...candidateArr)

  return max < 0 ? '' : String(max).repeat(3)
}

// largestGoodInteger('6777133339')
// largestGoodInteger('2300019')
// largestGoodInteger('42352338')
largestGoodInteger('2213')
