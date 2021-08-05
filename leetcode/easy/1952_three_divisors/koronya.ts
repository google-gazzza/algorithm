// [Easy] 1952. Three Divisors
// 1952_three_divisors

// https://leetcode.com/problems/three-divisors
// Runtime: 72 ms, faster than 96.55% of TypeScript online submissions for Three Divisors.
// Memory Usage: 40.6 MB, less than 41.38% of TypeScript online submissions for Three Divisors.

function isThree(n: number): boolean {
  const limit: number = ~~Math.sqrt(n)
  const resultSet = new Set()
  for (let i: number = 1; i <= limit; i += 1) {
    if (resultSet.size > 3) {
      return false
    }
    if (n % i === 0) {
      resultSet.add(i)
      resultSet.add(n / i)
    }
  }
  return resultSet.size === 3
}

isThree(2) //?
isThree(4) //?
isThree(100) //?
