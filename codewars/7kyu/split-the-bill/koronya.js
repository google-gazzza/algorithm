// [JS][7kyu] Split The Bill
// split-the-bill
// https://www.codewars.com/kata/5641275f07335295f10000d0/train/javascript

const getRoundedNum = (num) => Math.round(num * 100) / 100

const splitTheBill = (x) => {
  const total = Object.values(x).reduce((acc, cur) => acc + cur, 0)
  const each = total / Object.keys(x).length
  const result = {}
  for (const key in x) {
    result[key] = getRoundedNum(x[key] - each)
  }
  return result
}

// splitTheBill({ A: 20, B: 15, C: 10 })
// splitTheBill({ A: 40, B: 25, X: 10 })
// splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 })
