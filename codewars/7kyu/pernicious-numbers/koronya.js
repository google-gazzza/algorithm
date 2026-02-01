// [JS][7kyu] Pernicious Numbers
// pernicious-numbers
// https://www.codewars.com/kata/56e195d02bb22479e50016af/train/javascript

const getDigitSum = (num) =>
  num
    .toString(2)
    .split('')
    .reduce((acc, curr) => acc + Number(curr), 0)

getDigitSum(25)
getDigitSum(75)

const primeMap = new Map()
primeMap.set(2, true)

const isPrimeNumber = (num) => {
  if (primeMap.has(num)) {
    return primeMap.get(num)
  }

  const rangeNum = Math.floor(Math.sqrt(num))
  if (num % 2 === 0 || num === 1) {
    primeMap.set(num, false)
    return false
  }
  for (let i = 3; i <= rangeNum; i += 2) {
    if (num % i === 0) {
      primeMap.set(num, false)
      return false
    }
  }

  primeMap.set(num, true)
  return true
}

const pernicious = (n) => {
  if (n < 0) {
    return 'No pernicious numbers'
  }
  const limit = Math.floor(n)

  const result = []
  for (let i = 3; i <= limit; i += 1 || 0) {
    if (isPrimeNumber(getDigitSum(i))) {
      result.push(i)
    }
  }

  if (result.length === 0) {
    return 'No pernicious numbers'
  }
  return result
}

pernicious(4)
pernicious(5)
pernicious(232)

pernicious(0)
pernicious(1)
pernicious(-54)

pernicious(6.99)
pernicious(-6.99)
pernicious(42.42424242)
