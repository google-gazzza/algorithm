// [Easy] 762. Prime Number of Set Bits in Binary Representation
// 762_prime_number_of_set_bits_in_binary_representation

// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation
// Runtime: 420 ms, faster than 100.00% of TypeScript online submissions for Prime Number of Set Bits in Binary Representation.
// Memory Usage: 45.3 MB, less than 100.00% of TypeScript online submissions for Prime Number of Set Bits in Binary Representation.

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const primeMap = new Map<number, boolean>()
primeMap.set(2, true)

const isPrime = (num: number): boolean => {
  if (primeMap.has(num)) {
    return primeMap.get(num)!
  }

  const rangeNum: number = Math.floor(Math.sqrt(num))

  if (num % 2 === 0 || num === 1) {
    primeMap.set(num, false)
    return false
  }

  for (let i: number = 3; i <= rangeNum; i += 2) {
    if (num % i === 0) {
      primeMap.set(num, false)
      return false
    }
  }

  primeMap.set(num, true)
  return true
}

function countPrimeSetBits(L: number, R: number): number {
  let result: number = 0
  for (let i: number = L; i <= R; i += 1 || 0) {
    const count: number = i
      .toString(2)
      .split('')
      .reduce((acc, cur) => (cur === '1' ? acc + 1 : acc), 0)

    if (isPrime(count) === true) {
      result += 1
    }
  }

  return result
}
