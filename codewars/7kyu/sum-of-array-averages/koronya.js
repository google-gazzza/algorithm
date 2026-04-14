// [JS][7kyu] Sum of Array Averages
// sum-of-array-averages
// https://www.codewars.com/kata/56d5166ec87df55dbe000063/train/javascript

const getAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length
const sumAverage = (arr) => Math.floor(arr.reduce((acc, curr) => acc + getAverage(curr), 0))

sumAverage([
  [3, 4, 1, 3, 5, 1, 4],
  [21, 54, 33, 21, 77],
]) === 44
sumAverage([
  [-4, 3, -8, -2],
  [2, 9, 1, -5],
  [-7, -2, -6, -4],
]) === -6
