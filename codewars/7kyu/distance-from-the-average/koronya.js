// [JS][7kyu] Distance from the average
// distance-from-the-average
// https://www.codewars.com/kata/568ff914fc7a40a18500005c/train/javascript

const getRoundNumber = (num) => Math.round(num * 100) / 100

const distancesFromAverage = (arr) => {
  const average = arr.reduce((sum, cur) => sum + cur, 0) / arr.length
  return arr.map((num) => getRoundNumber(average - num))
}

distancesFromAverage([55, 95, 62, 36, 48])
