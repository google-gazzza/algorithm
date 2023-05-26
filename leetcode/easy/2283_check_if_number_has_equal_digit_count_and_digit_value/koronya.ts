// [Easy] 2283. Check if Number Has Equal Digit Count and Digit Value
// 2283_check_if_number_has_equal_digit_count_and_digit_value

// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value
// Runtime: 86 ms, faster than 76.75% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.
// Memory Usage: 42.1 MB, less than 85.53% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.

function digitCount(num: string): boolean {
  const numLen = num.length
  const numMap = new Map<number, number>()
  for (let i: number = 0; i < numLen; i += 1) {
    const n = Number(num[i])
    numMap.set(n, (numMap.get(n) || 0) + 1)
  }
  for (let i: number = 0; i < numLen; i += 1) {
    if ((!numMap.has(i) && Number(num[i]) !== 0) || (numMap.has(i) && numMap.get(i) !== Number(num[i]))) {
      return false
    }
  }

  return true
}
