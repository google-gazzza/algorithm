// [Easy] 788. Rotated Digits
// 788_rotated_digits

// https://leetcode.com/problems/rotated-digits
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Rotated Digits.
// Memory Usage: 46 MB, less than 25.00% of TypeScript online submissions for Rotated Digits.
const invalidArr: string[] = ['3', '4', '7']
const roteteToOtherArr: string[] = ['2', '5', '6', '9']
const degreeMapper = (num: number): boolean => {
  const numArr: string[] = [...String(num)]
  const numArrLen: number = numArr.length
  let flag: boolean = false
  for (let i: number = 0; i < numArrLen; i += 1 || 0) {
    const num: string = numArr[i]
    if (invalidArr.includes(num)) {
      return false
    }
    if (roteteToOtherArr.includes(num)) {
      flag = true
    }
  }
  return flag
}

function rotatedDigits (N: number): number {
  let count: number = 0
  for (let i: number = 1; i <= N; i += 1 || 0) {
    if (degreeMapper(i) === true) {
      count += 1
    }
  }
  return count
}
