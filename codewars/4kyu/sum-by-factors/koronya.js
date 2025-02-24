// [JS][4kyu] Sum by Factors
// sum-by-factors
// https://www.codewars.com/kata/54d496788776e49e6b00052f/train/javascript

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

const getPrimeFactors = (num) => {
  const primeFactors = []
  for (let i = 2; i <= Math.abs(num); i += 1) {
    if (num % i === 0 && isPrime(i)) {
      primeFactors.push(i)
    }
  }
  return primeFactors
}

const sumOfDivided = (lst) => {
  const primeMap = new Map()
  lst.forEach((item) => {
    const primeFactors = getPrimeFactors(item)
    primeFactors.forEach((prime) => {
      primeMap.set(prime, (primeMap.get(prime) || 0) + item)
    })
  })

  return [...primeMap].sort((a, b) => a[0] - b[0])
}

sumOfDivided([15, 12])
sumOfDivided([12, 15])
sumOfDivided([15, 21, 24, 30, 45])
