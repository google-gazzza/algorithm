// [JS][7kyu] Sum of the first nth term of Series
// sum-of-the-first-nth-term-of-series
// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

const SeriesSum = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i += 1 || 0) {
    sum += 1 / (3 * (i - 1) + 1)
  }

  return sum.toFixed(2)
}

SeriesSum(1)
SeriesSum(2)
SeriesSum(3)
SeriesSum(5)
