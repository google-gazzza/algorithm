// [JS][6kyu] Transform To Prime
// transform-to-prime
// https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript

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

const getNextPrimeNumber = (num) => {
  let flag = true
  let target = num + 1
  while (flag) {
    if (isPrimeNumber(target)) {
      return target
    }
    target += 1
  }
}

const minimumNumber = (numbers) => {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0)
  if (isPrimeNumber(sum) === true) {
    return 0
  }
  return getNextPrimeNumber(sum) - sum
}

minimumNumber([3, 1, 2]) === 1
minimumNumber([5, 2]) === 0
minimumNumber([1, 1, 1]) === 0
minimumNumber([2, 12, 8, 4, 6]) === 5
minimumNumber([50, 39, 49, 6, 17, 28]) === 2
