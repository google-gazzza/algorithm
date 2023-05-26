// [Easy] 1903. Largest Odd Number in String
// 1903_largest_odd_number_in_string

// https://leetcode.com/problems/largest-odd-number-in-string
// Runtime: 88 ms, faster than 81.08% of TypeScript online submissions for Largest Odd Number in String.
// Memory Usage: 43.9 MB, less than 83.78% of TypeScript online submissions for Largest Odd Number in String.

function largestOddNumber(num: string): string {
  let lastOddIndex: number = -1
  for (let i: number = num.length - 1; i >= 0; i -= 1) {
    if (Number(num[i]) % 2 === 1) {
      lastOddIndex = i
      break
    }
  }
  return lastOddIndex === -1 ? '' : num.substring(0, lastOddIndex + 1)
}

largestOddNumber('52') //?
largestOddNumber('25') //?
largestOddNumber('572') //?
largestOddNumber('4206') //?
largestOddNumber('35427') //?
