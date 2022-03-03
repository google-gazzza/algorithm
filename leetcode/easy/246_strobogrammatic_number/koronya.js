// [Easy] 246. Strobogrammatic Number
// 246_strobogrammatic_number

// https://leetcode.com/problems/strobogrammatic-number
// Runtime: 60 ms, faster than 92.93% of JavaScript online submissions for Strobogrammatic Number.
// Memory Usage: 42.2 MB, less than 14.65% of JavaScript online submissions for Strobogrammatic Number.

const getRotatedNum = (numStr) => {
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

/**
 * @param {string} num
 * @return {boolean}
 */
const isStrobogrammatic = function (num) {
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

isStrobogrammatic('29')
isStrobogrammatic('69')
isStrobogrammatic('88')
isStrobogrammatic('962')
isStrobogrammatic('698')
