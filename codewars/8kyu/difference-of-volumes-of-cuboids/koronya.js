// [JS][8kyu] Difference of Volumes of Cuboids
// difference-of-volumes-of-cuboids
// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

const getMultiply = (arr) => arr.reduce((acc, cur) => acc * cur, 1)
const findDifference = (a, b) => Math.abs(getMultiply(a) - getMultiply(b))

findDifference([3, 2, 5], [1, 4, 4])
