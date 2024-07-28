// [JS][7kyu] Count all the sheep on farm in the heights of New Zealand
// count-all-the-sheep-on-farm-in-the-heights-of-new-zealand
// https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010/train/javascript

const lostSheep = (friday, saturday, total) => {
  const fridaySheep = friday.reduce((acc, cur) => acc + cur, 0)
  const saturdaySheep = saturday.reduce((acc, cur) => acc + cur, 0)
  return total - fridaySheep - saturdaySheep
}

lostSheep([1, 2], [3, 4], 15) === 5
lostSheep([3, 1, 2], [4, 5], 21) === 6
lostSheep([5, 1, 4], [5, 4], 29) === 10
lostSheep([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300) === 178
lostSheep([2, 7, 13, 17], [23, 56, 44, 12, 1, 2, 1], 255) === 77
lostSheep([2, 5, 8], [11, 23, 3, 4, 15, 112, 12, 4], 355) === 156
lostSheep([1, 1, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1], 30) === 13
lostSheep([5, 10, 15], [11, 23, 3, 4, 15], 89) === 3
lostSheep([3, 6, 9, 12], [3, 2, 1, 2, 3, 1], 44) === 2
lostSheep([], [], 15) === 15
