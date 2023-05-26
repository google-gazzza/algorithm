// [Medium] 357. Count Numbers with Unique Digits
// 357_count_numbers_with_unique_digits

// https://leetcode.com/problems/count-numbers-with-unique-digits
// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Count Numbers with Unique Digits.
// Memory Usage: 38.4 MB, less than 41.46% of JavaScript online submissions for Count Numbers with Unique Digits.
const numMap = new Map()
numMap.set(1, 9)
const getMatchNumber = (n) => {
  if (numMap.has(n)) {
    return numMap.get(n)
  }
  const val = getMatchNumber(n - 1) * (11 - n)
  numMap.set(n, val)

  return val
}

const countNumbersWithUniqueDigits = function (n) {
  let result = 1
  for (let i = 0; i < n; i += 1 || 0) {
    result += getMatchNumber(i + 1)
  }

  return result
}
