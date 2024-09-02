// [JS][7kyu] A snail enters a bar!
// a-snail-enters-a-bar
// https://www.codewars.com/kata/66cdc6ab9e7a9f009e0ca8f6/train/javascript

const ONE_YEAR_MINUTE = 365 * 24 * 60
const canSnailReachEnd = (length, speed, lengthIncreases) => {
  if (speed <= lengthIncreases) {
    return false
  }
  return length + lengthIncreases * ONE_YEAR_MINUTE < speed * ONE_YEAR_MINUTE
}

canSnailReachEnd(10, 2, 1) === true
canSnailReachEnd(100, 10, 5) === true
canSnailReachEnd(50, 5, 1) === true
canSnailReachEnd(1000, 100, 10) === true
canSnailReachEnd(1, 0.1, 0.01) === true

canSnailReachEnd(100, 1, 2) === false
canSnailReachEnd(100000, 0.1, 0.05) === false
canSnailReachEnd(100, 0.5, 1) === false
canSnailReachEnd(1000, 1, 2) === false
canSnailReachEnd(500, 5, 10) === false
canSnailReachEnd(10000, 0.1, 1) === false
