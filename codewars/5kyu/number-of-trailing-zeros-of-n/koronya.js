// [JS][5kyu] Number of trailing zeros of N!
// number-of-trailing-zeros-of-n
// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript

// [JS][7kyu] Factorial
// factorial
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

// 1
// 2
// 3
// 2 * 2
// 5
// 2 * 3
// 7
// 2 * 2 * 2
// 3 * 3
// 2 * 5

// 1 * (2 ^ 8) * (3 ^ 4) * (5 ^ 2) * 7

const getFiveCount = (num) => {
  let count = 0
  let target = num
  while (target >= 5) {
    if (target % 5 === 0) {
      count += 1
      target /= 5
    } else {
      break
    }
  }
  return count
}

// TLE...
const zeros2 = (n) => {
  let count = 0
  for (let i = 5; i <= n; i += 5) {
    count += getFiveCount(i)
  }

  return count
}

// success!
const zeros = (n) => {
  let count = 0
  let target = 5
  while (target <= n) {
    count += Math.floor(n / target)
    target *= 5
  }

  return count
}

// zeros(0)
zeros(5)
// zeros(6)
// zeros(10)
// zeros(30)
// zeros(100)
// zeros(1000)
