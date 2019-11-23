// https://leetcode.com/problems/reverse-integer
// Runtime: 64 ms, faster than 96.80% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 36.3 MB, less than 12.50% of JavaScript online submissions for Reverse Integer.
const MAX = (2 ** 31) - 1
const MIN = -(2 ** 31)

const reverse = x => {
  const strX = String(x)
  const reverseStrArr = strX.split('').reverse()

  if (strX[0] === '-') {
    reverseStrArr.unshift('-')
    reverseStrArr.pop()
  }

  const accStr = reverseStrArr.reduce((acc, cur) => acc + cur, '')
  const accNum = Number(accStr)

  return accNum > MAX || accNum < MIN
    ? 0
    : accNum
}
