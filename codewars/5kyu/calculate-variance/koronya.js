// [JS][5kyu] Calculate Variance
// calculate-variance
// https://www.codewars.com/kata/5266fba01283974e720000fa/train/javascript

// Takes an array of numbers and returns the variance as a float.
// The array of numbers will always have at least one element in it.

const getRound4 = (num) => Math.round(num * 10000) / 10000

const variance = (numbers) => {
  const numbersLen = numbers.length
  const mean = numbers.reduce((acc, cur) => acc + cur, 0) / numbersLen
  const variance = getRound4(numbers.reduce((acc, cur) => acc + (cur - mean) ** 2, 0) / numbersLen)
  return variance
}

const numbers1 = [-10, 0, 10, 20, 30]
const numbers2 = [8, 9, 10, 11, 12]
const numbers3 = [1.5, 2.5, 4, 2, 1, 1]

variance(numbers1)
variance(numbers2)
variance(numbers3)
