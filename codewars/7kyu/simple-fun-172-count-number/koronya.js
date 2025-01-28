// [JS][7kyu] Simple Fun #172: Count Number
// simple-fun-172-count-number
// https://www.codewars.com/kata/58b635903e78b34958000056/train/javascript

const countNumber = (n, x) => {
  let count = 0
  for (let row = 1; row <= n; row += 1) {
    const num = x / row
    if (num % 1 === 0 && num <= n) {
      count += 1
    }
  }
  return count
}

// countNumber(5, 5) === 2
// countNumber(10, 5) === 2
// countNumber(6, 12) === 4
// countNumber(100000, 1000000000) === 16
// countNumber(9, 484) === 0
