// [JS][7kyu] beginner-series-3-sum-of-numbers
// beginner-series-3-sum-of-numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

const getSum = (a, b) => {
  const min = a < b ? a : b
  const max = a < b ? b : a
  let sum = 0
  for (let i = min; i <= max; i += 1 || 0) {
    sum += i
  }
  return sum
}

const getSum2 = (a, b) => {
  const min = a < b ? a : b
  const max = a < b ? b : a
  const sum = min + max
  const many = max - min + 1
  return (sum * many) / 2
}

// getSum(0, 2)
// getSum(-1, 2)
// getSum(-1, 2)

// getSum(0, -1) === -1
// getSum(0, 1) === 1
// getSum(2, 2) === 2
