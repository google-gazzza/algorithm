// [JS][7kyu] Check for prime numbers
// check-for-prime-numbers
// https://www.codewars.com/kata/53daa9e5af55c184db00025f/train/javascript

const primeMap = new Map()
primeMap.set(2, true)

const isPrime = (num) => {
  if (primeMap.has(num)) {
    return primeMap.get(num)
  }
  if (num % 2 === 0 || num === 1) {
    primeMap.set(num, false)
    return false
  }

  const rangeNum = Math.floor(Math.sqrt(num))
  for (let i = 3; i <= rangeNum; i += 2) {
    if (num % i === 0) {
      primeMap.set(num, false)
      return false
    }
  }

  primeMap.set(num, true)
  return true
}
