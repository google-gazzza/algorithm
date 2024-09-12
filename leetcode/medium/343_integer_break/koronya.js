// [Medium] 343. Integer Break
// 343_integer_break

// https://leetcode.com/problems/integer-break
// Runtime: 76 ms, faster than 72.73% of JavaScript online submissions for Integer Break.
// Memory Usage: 36.4 MB, less than 74.67% of JavaScript online submissions for Integer Break.
const nMap = new Map()
nMap.set(2, 1)
nMap.set(3, 2)
nMap.set(4, 4)
nMap.set(5, 6)
nMap.set(6, 9)

const integerBreak = n => {
  if (nMap.has(n)) {
    return nMap.get(n)
  }
  const result = integerBreak(n - 3) * 3
  nMap.set(n, result)
  return result
}
