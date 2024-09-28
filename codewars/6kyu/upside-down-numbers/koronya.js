// [JS][6kyu] Upside down numbers
// upside-down-numbers
// https://www.codewars.com/kata/59f7597716049833200001eb/train/javascript

const INVALID_NUMS = ['2', '3', '4', '5', '7']

const hasInvalidNum = (num) =>
  String(num)
    .split('')
    .some((str) => INVALID_NUMS.includes(str))

const INVERTED_NUMS = {
  0: 0,
  1: 1,
  6: 9,
  8: 8,
  9: 6,
}

const getUpsideDownNum = (num) =>
  Number(
    String(num)
      .split('')
      .reverse()
      .map((str) => INVERTED_NUMS[Number(str)])
      .join(''),
  )

const solve = (x, y) => {
  let count = 0
  for (let i = x; i < y; i += 1 || 0) {
    if (hasInvalidNum(i) === false && getUpsideDownNum(i) === i) {
      count += 1
    }
  }

  return count
}

// solve(0, 10) === 3
// solve(10, 100) === 4
// solve(100, 1000) === 12
// solve(1000, 10000) === 20
// solve(10000, 15000) === 6
// solve(15000, 20000) === 9
// solve(60000, 70000) === 15
// solve(60000, 130000) === 55
