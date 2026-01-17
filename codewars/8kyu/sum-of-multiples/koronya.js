// [JS][8kyu] Sum of Multiples
// sum-of-multiples
// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

const sumMul = (n,m) => {
  if (n >= m) {
    return "INVALID"
  }
  let sum = 0
  for (let i = n; i < m; i += n) {
    sum += i
  }
  return sum
}

sumMul(0,0) === "INVALID"
sumMul(2,9) === 20
sumMul(4,-7) === "INVALID"

