// [JS][6kyu] Simple sum of pairs
// simple-sum-of-pairs
// https://www.codewars.com/kata/5bc027fccd4ec86c840000b7/train/javascript

const digitSumMap = new Map()

const getDigitSum = (num) => {
  if (digitSumMap.has(num)) {
    return digitSumMap.get(num)
  }
  let sum = 0
  let n = num
  while (n > 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  digitSumMap.set(num, sum)
  return sum
}

const solve = (n) => {
  const nLen = String(n).length
  if (nLen === 1) {
    return getDigitSum(n)
  }

  const numA = 10 ** (nLen - 1) - 1
  const numB = n - numA

  return getDigitSum(numA) + getDigitSum(numB)
}

solve(18) === 18
solve(29) === 11
solve(45) === 18
solve(1140) === 33
solve(7019) === 35

solve(1)
solve(50000000)
solve(15569047737) === 144
solve(2452148459) === 116
