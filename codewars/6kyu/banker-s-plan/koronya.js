// [JS][6kyu] Banker's Plan
// banker-s-plan
// https://www.codewars.com/kata/56445c4755d0e45b8c00010a/train/javascript

const fortune = (f0, p, c0, n, i) => {
  let money = f0
  let yearCount = 1
  let withdrawal = c0
  while (yearCount < n) {
    yearCount += 1
    money = Math.floor(money + money * (p / 100) - withdrawal)
    withdrawal = Math.floor(withdrawal + withdrawal * (i / 100))
    if (money < 0) {
      return false
    }
  }
  return true
}

// fortune(100000, 1, 2000, 4, 1)
// fortune(100000, 1, 2000, 15, 1) === true
// fortune(100000, 1, 9185, 12, 1) === false
// fortune(100000000, 1, 100000, 50, 1) === true
// fortune(100000000, 1.5, 10000000, 50, 1) === false
// fortune(100000000, 5, 1000000, 50, 1) === true
