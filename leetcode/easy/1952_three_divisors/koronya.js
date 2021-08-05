// [Easy] 1952. Three Divisors
// 1952_three_divisors

// https://leetcode.com/problems/three-divisors
// Runtime: 64 ms, faster than 98.17% of JavaScript online submissions for Three Divisors.
// Memory Usage: 39 MB, less than 36.99% of JavaScript online submissions for Three Divisors.

/**
 * @param {number} n
 * @return {boolean}
 */
const isThree = function (n) {
  const limit = ~~Math.sqrt(n)
  const resultSet = new Set()
  for (let i = 1; i <= limit; i += 1 || 0) {
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
