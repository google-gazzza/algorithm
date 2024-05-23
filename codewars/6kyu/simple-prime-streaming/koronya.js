// [JS][6kyu] Simple prime streaming
// simple-prime-streaming
// https://www.codewars.com/kata/5a908da30025e995880000e3/train/javascript

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

const solve = (a, b) => {
  let result = '2'
  const resultArr = [2]
  while (result.length < a + b) {
    const nextPrime = getNextPrimeNumber(resultArr[resultArr.length - 1])
    result += String(nextPrime)
    resultArr.push(nextPrime)
  }

  return result.slice(a, a + b)
}

// solve(10, 5)

// solve(2, 2) === '57'
// solve(10, 3) === '192'
// solve(20, 9) === '414347535'
// solve(30, 12) === '616771737983'
// solve(40, 8) === '83899710'
// solve(50, 6) === '031071'
// solve(10000, 5) === '02192'
// solve(20000, 5) === '09334'
