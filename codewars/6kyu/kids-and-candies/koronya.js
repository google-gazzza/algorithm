// [JS][6kyu] Kids and candies
// kids-and-candies
// https://www.codewars.com/kata/56cca888a9d0f25985000036/train/javascript

const primeMap = new Map([
  [1, false],
  [2, true],
  [3, true],
  [4, false],
  [5, true],
  [6, false],
  [7, true],
  [8, false],
  [9, false],
  [10, false],
])

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

const candiesToBuy = (kids) => {
  const primeArr = []
  for (let i = 2; i <= kids; i += 1) {
    if (isPrime(i)) {
      primeArr.push(i)
    }
  }
  const multiplyArr = []
  const kidsArr = Array.from({ length: kids }, (_, i) => i + 1)
  primeArr.reduce((acc, primeNumber) => {
    let tempArr = acc
    while (tempArr.some((kid) => kid % primeNumber === 0)) {
      multiplyArr.push(primeNumber)
      tempArr = tempArr.map((kid) => (kid % primeNumber === 0 ? kid / primeNumber : kid))
    }
    return tempArr
  }, kidsArr)

  return multiplyArr.reduce((acc, cur) => acc * cur, 1)
}

candiesToBuy(1) === 1
candiesToBuy(2) === 2
candiesToBuy(3) === 6
candiesToBuy(4) === 12
candiesToBuy(5) === 60
candiesToBuy(10) === 2520
candiesToBuy(11) === 27720
candiesToBuy(12) === 27720
candiesToBuy(20) === 232792560
