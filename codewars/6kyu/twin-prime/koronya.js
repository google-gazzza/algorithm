// [JS][6kyu] Twin Prime
// twin-prime
// https://www.codewars.com/kata/59b7ae14bf10a402d40000f3/train/javascript

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

const isTwinPrime = (n) => {
  if (isPrime(n) === false) {
    return false
  }
  if (isPrime(n - 2) === true || isPrime(n + 2) === true) {
    return true
  }
  return false
}

isTwinPrime(5) === true
isTwinPrime(25) === false
