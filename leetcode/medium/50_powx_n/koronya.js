// [Medium] 50. Pow(x, n)
// 50_pow(x,_n)

// https://leetcode.com/problems/powx-n
// Runtime: 76 ms, faster than 76.20% of JavaScript online submissions for Pow(x, n).
// Memory Usage: 40 MB, less than 52.20% of JavaScript online submissions for Pow(x, n).

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  if (n === 0) {
    return 1
  }
  let absN = Math.abs(n)
  const squareX = x * x
  const result = absN % 2 === 0 ? myPow(squareX, absN / 2) : x * myPow(squareX, (absN - 1) / 2)

  return n > 0 ? result : 1 / result
}

// TLE...
const myPow2 = function (x, n) {
  if (n === 0) {
    return 1
  }
  let result = x
  const adjustN = n > 0 ? n : -n
  for (let i = 1; i < adjustN; i += 1 || 0) {
    result *= x
  }
  return n > 0 ? result : 1 / result
}

myPow(2.0, 10) //?
myPow(2.1, 3) //?
myPow(2.0, -2) //?
myPow(2.0, -2147483648) //?
myPow(2.0, 2147483648) //?
