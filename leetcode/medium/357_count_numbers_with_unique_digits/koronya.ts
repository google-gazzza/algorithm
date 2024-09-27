// [Medium] 357. Count Numbers with Unique Digits
// 357_count_numbers_with_unique_digits

// https://leetcode.com/problems/count-numbers-with-unique-digits
// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Count Numbers with Unique Digits.
// Memory Usage: 38.4 MB, less than 41.46% of JavaScript online submissions for Count Numbers with Unique Digits.
const numMap = new Map<number, number>()
numMap.set(1, 9)
const getMatchNumber = (n: number): number => {
  if (numMap.has(n) === true) {
    return numMap.get(n)
  }
  const val: number = getMatchNumber(n - 1) * (11 - n)
  numMap.set(n, val)

  return val
}

function countNumbersWithUniqueDigits (n: number): number {
  let result: number = 1
  for (let i: number = 0; i < n; i += 1) {
    result += getMatchNumber(i + 1)
  }

  return result
}
