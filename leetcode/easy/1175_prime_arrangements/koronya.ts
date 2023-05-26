// [Easy] 1175. Prime Arrangements
// 1175_prime_arrangements

// https://leetcode.com/problems/prime-arrangements/
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Prime Arrangements.
// Memory Usage: 40.1 MB, less than 100.00% of TypeScript online submissions for Prime Arrangements.

const MODULO_NUMBER: bigint = 1000000007n
const primeArr: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const getFactorial = (n: number): bigint => (n <= 1 ? 1n : (BigInt(n) * getFactorial(n - 1)) % MODULO_NUMBER)
const getPrimeCount = (num: number): number => {
  const count = primeArr.findIndex((item) => item > num)
  return count === -1 ? primeArr.length : count
}

function numPrimeArrangements(n: number): bigint {
  const count = getPrimeCount(n)
  return (getFactorial(count) * getFactorial(n - count)) % MODULO_NUMBER
}

