// [Easy] 246. Strobogrammatic Number
// 246_strobogrammatic_number

// https://leetcode.com/problems/strobogrammatic-number
// Runtime: 68 ms, faster than 100.00% of TypeScript online submissions for Strobogrammatic Number.
// Memory Usage: 43.6 MB, less than 5.26% of TypeScript online submissions for Strobogrammatic Number.

const getRotatedNum = (numStr: string): string => {
  switch (numStr) {
    case '0':
    default:
      return '0'
    case '1':
      return '1'
    case '6':
      return '9'
    case '8':
      return '8'
    case '9':
      return '6'
  }
}

const invalidNum = [2, 3, 4, 5, 7]

function isStrobogrammatic(num: string): boolean {
  const numArr = num.split('')
  if (numArr.some((num) => invalidNum.includes(Number(num)))) {
    return false
  }
  const reverseNum = numArr
    .map((numStr) => getRotatedNum(numStr))
    .reverse()
    .reduce((acc, cur) => acc + cur, '')

  return num === reverseNum
}
