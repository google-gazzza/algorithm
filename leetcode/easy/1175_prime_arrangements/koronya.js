// [Easy] 1175. Prime Arrangements
// 1175_prime_arrangements

// https://leetcode.com/problems/prime-arrangements/
// Runtime: 72 ms, faster than 97.62% of JavaScript online submissions for Prime Arrangements.
// Memory Usage: 38.6 MB, less than 76.19% of JavaScript online submissions for Prime Arrangements.

const MODULO_NUMBER = 1000000007n
const primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const getFactorial = (n) => (n <= 1 ? 1n : (BigInt(n) * getFactorial(n - 1)) % MODULO_NUMBER)
const getPrimeCount = (num) => {
  const count = primeArr.findIndex((item) => item > num)
  return count === -1 ? primeArr.length : count
}

/**
 * @param {number} n
 * @return {number}
 */
const numPrimeArrangements = function (n) {
  const count = getPrimeCount(n)
  return (getFactorial(count) * getFactorial(n - count)) % MODULO_NUMBER
}

numPrimeArrangements(5) //?
numPrimeArrangements(100) //?
