// [JS][7kyu] ATM
// atm
// https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript

const ARR = [500, 200, 100, 50, 20, 10]

const solve = (n) => {
  if (n % 10 !== 0) {
    return -1
  }

  let count = 0
  ARR.forEach((num) => {
    while (n >= num) {
      n -= num
      count += 1
    }
  })

  return count
}

solve(770) === 4
solve(550) === 2
solve(10) === 1
solve(1250) === 4

solve(125) === -1
solve(666) === -1
solve(42) === -1
