// [JS][6kyu] Backwards Read Primes
// backwards-read-primes
// https://www.codewars.com/kata/5539fecef69c483c5a000015/train/javascript

const primeMap = new Map()
primeMap.set(1, false)
primeMap.set(2, true)
primeMap.set(3, true)

const isPrime = (n) => {
  if (primeMap.has(n)) {
    return primeMap.get(n)
  }
  if (n % 2 === 0) {
    primeMap.set(n, false)
    return false
  }
  const limit = Math.floor(Math.sqrt(n))
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) {
      primeMap.set(n, false)
      return false
    }
  }
  primeMap.set(n, true)
  return true
}

const reverse = (n) => Number(n.toString().split('').reverse().join(''))

const backwardsPrime = (start, stop) => {
  const resultSet = new Set()
  for (let i = start; i <= stop; i += 1) {
    const reverseNum = reverse(i)
    if (i !== reverseNum && isPrime(i) && isPrime(reverseNum)) {
      resultSet.add(i)
    }
  }
  return [...resultSet].sort((a, b) => a - b)
}

const compare = (a, b) => a.join(',') === b.join(',')

backwardsPrime(2, 100)
backwardsPrime(10, 100)
backwardsPrime(10, 30)

backwardsPrime(501, 599)

compare(backwardsPrime(2, 100), [13, 17, 31, 37, 71, 73, 79, 97])
compare(backwardsPrime(9900, 10000), [9923, 9931, 9941, 9967])
compare(backwardsPrime(501, 599), [])
