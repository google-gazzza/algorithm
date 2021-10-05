// [Medium] 50. Pow(x, n)
// 50_pow(x,_n)

// https://leetcode.com/problems/powx-n
// Runtime: 80 ms, faster than 83.33% of TypeScript online submissions for Pow(x, n).
// Memory Usage: 40.7 MB, less than 45.51% of TypeScript online submissions for Pow(x, n).

function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1
  }
  let absN = Math.abs(n)
  const squareX = x * x
  const result = absN % 2 === 0 ? myPow(squareX, absN / 2) : x * myPow(squareX, (absN - 1) / 2)

  return n > 0 ? result : 1 / result
}

myPow(2.0, 10) //?
myPow(2.1, 3) //?
myPow(2.0, -2) //?
myPow(2.0, -2147483648) //?
myPow(2.0, 2147483648) //?
