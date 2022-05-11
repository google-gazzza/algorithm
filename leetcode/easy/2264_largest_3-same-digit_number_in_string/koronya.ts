// [Easy] 2264. Largest 3-Same-Digit Number in String
// 2264_largest_3-same-digit_number_in_string

// https://leetcode.com/problems/largest-3-same-digit-number-in-string
// Runtime: 76 ms, faster than 86.36% of TypeScript online submissions for Largest 3-Same-Digit Number in String.
// Memory Usage: 45 MB, less than 40.91% of TypeScript online submissions for Largest 3-Same-Digit Number in String.

function largestGoodInteger(num: string): string {
  const candidateArr = []
  const numLen = num.length
  let beforeCount = 1
  let before = num[0]
  for (let i: number = 1; i < numLen; i += 1) {
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
