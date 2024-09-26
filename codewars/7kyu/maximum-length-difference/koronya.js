// [JS][7kyu] Maximum Length Difference
// maximum-length-difference
// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) {
    return -1
  }
  const a1Arr = a1.map((item) => item.length)
  const a2Arr = a2.map((item) => item.length)
  const min1 = Math.min(...a1Arr)
  const max1 = Math.max(...a1Arr)
  const min2 = Math.min(...a2Arr)
  const max2 = Math.max(...a2Arr)

  return Math.max(Math.abs(max2 - min1), Math.abs(max1 - min2))
}

mxdiflg(
  ['hoqq', 'bbllkw', 'oox', 'ejjuyyy', 'plmiis', 'xxxzgpsssa', 'xxwwkktt', 'znnnnfqknaz', 'qqquuhii', 'dvvvwz'],
  ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'],
)
