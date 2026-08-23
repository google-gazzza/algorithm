// [JS][8kyu] Find Nearest square number
// find-nearest-square-number
// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/javascript

const nearestSq = (n) => {
  const sqrt = Math.sqrt(n)
  const lower = Math.floor(sqrt) ** 2
  const upper = Math.ceil(sqrt) ** 2

  return n - lower < upper - n ? lower : upper
}

nearestSq(1) === 1
nearestSq(2) === 1
nearestSq(10) === 9
nearestSq(111) === 121
nearestSq(9999) === 10000
