// [Medium] 738. Monotone Increasing Digits
// 738_monotone_increasing_digits

// https://leetcode.com/problems/monotone-increasing-digits
// Runtime: 97 ms, faster than 66.67% of TypeScript online submissions for Monotone Increasing Digits.
// Memory Usage: 44.4 MB, less than 66.67% of TypeScript online submissions for Monotone Increasing Digits.

const getNumber = (arr: number[]): string => arr.reduce((acc, cur) => acc + String(cur), '')

function monotoneIncreasingDigits(n: number): number {
  const nArr = String(n)
    .split('')
    .map((item) => Number(item))
  const nArrLen = nArr.length
  if (nArrLen === 1) {
    return n
  }
  let endIndex = nArrLen - 1
  for (let i: number = nArrLen - 1; i > 0; i -= 1) {
    if (nArr[i] < nArr[i - 1]) {
      endIndex = i - 1
      nArr[i - 1] -= 1
    }
  }

  return Number(getNumber(nArr.slice(0, endIndex + 1)) + '9'.repeat(nArrLen - 1 - endIndex))
}
