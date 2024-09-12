// [Easy] 2243. Calculate Digit Sum of a String
// 2243_calculate_digit_sum_of_a_string

// https://leetcode.com/problems/calculate-digit-sum-of-a-string
// Runtime: 67 ms, faster than 93.75% of TypeScript online submissions for Calculate Digit Sum of a String.
// Memory Usage: 44.5 MB, less than 56.25% of TypeScript online submissions for Calculate Digit Sum of a String.

const getAcc = (s: string, k: number): string => {
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

function digitSum(s: string, k: number): string {
  let result = s
  while (result.length > k) {
    result = getAcc(result, k)
  }

  return result
}
