// https://leetcode.com/problems/count-primes/submissions/
// Runtime: 152 ms, faster than 58.17% of JavaScript online submissions for Count Primes.
// Memory Usage: 128.2 MB, less than 13.33% of JavaScript online submissions for Count Primes.
const countPrimes = num => {
  let primeCount = 0
  const sieve = {}

  for (let i = 2; i < num; i += 1) {
    sieve[i] = 0
  }

  const bound = Math.floor(Math.sqrt(num)) + 1

  // 2 ~ root(num)까지 순회하면서 체에 남아있는 것 중, 그것의 배수를 지운다.
  for (let i = 2; i < bound; i += 1) {
    if (sieve[i] === 0) {
      n = 2
      while (i * n <= num) {
        sieve[i * n] = 1
        n += 1
      }
    }
  }

  // 체에 다 걸러진 이후에, 남은 수들이 소수
  for (let i = 2; i < num; i += 1) {
    if (sieve[i] === 0) {
      primeCount += 1
    }
  }

  return primeCount
}




const isPrime = num => {
  const rangeNum = Math.floor(Math.sqrt(num))

  if (num === 2) {
    return true
  }

  if (num % 2 === 0 || num === 1) {
    return false
  }

  for (let i = 3; i <= rangeNum; i += 2) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

// Runtime: 400 ms, faster than 35.05% of JavaScript online submissions for Count Primes.
// Memory Usage: 34.3 MB, less than 93.33% of JavaScript online submissions for Count Primes.
const countPrimes2 = num => {
  let count = 0
  for (let i = 1; i < num; i += 1) {
    if (isPrime(i)) {
      count += 1
    }
  }
  return count
}
