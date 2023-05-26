// [Easy] 2243. Calculate Digit Sum of a String
// 2243_calculate_digit_sum_of_a_string

// https://leetcode.com/problems/calculate-digit-sum-of-a-string
// Runtime: 71 ms, faster than 48.13% of JavaScript online submissions for Calculate Digit Sum of a String.
// Memory Usage: 42 MB, less than 93.75% of JavaScript online submissions for Calculate Digit Sum of a String.

const getAcc = (s, k) => {
  const sLen = s.length
  let target = 0
  let accStr = ''
  while (target < sLen) {
    const str = s.substring(target, target + k)
    accStr += str.split('').reduce((acc, cur) => acc + Number(cur), 0)
    target += k
  }

  return accStr
}

getAcc('11111222223', 3)
getAcc('3465', 3)

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const digitSum = function (s, k) {
  let result = s
  while (result.length > k) {
    result = getAcc(result, k)
  }

  return result
}

digitSum('11111222223', 3)
// digitSum('00000000', 3)
