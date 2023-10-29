// [JS][5kyu] Integers: Recreation One
// integers-recreation-one
// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

const getPair = (num) => {
  const limit = Math.sqrt(num)
  const result = []
  for (let i = 1; i < limit; i += 1 || 0) {
    if (num % i === 0) {
      result.push(i)
      result.push(num / i)
    }
  }
  const squareSum = result.length === 0 ? num : result.reduce((acc, cur) => acc + cur ** 2, 0)
  const isSquare = Number.isInteger(Math.sqrt(squareSum))
  return {
    isValid: isSquare,
    squareSum,
  }
}

const listSquared = (m, n) => {
  const result = []
  for (let i = m; i <= n; i += 1 || 0) {
    const { isValid, squareSum } = getPair(i)
    if (isValid) {
      result.push([i, squareSum])
    }
  }
  return result
}

listSquared(1, 250)
listSquared(42, 250)
listSquared(250, 500)
