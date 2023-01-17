// [JS][7kyu] Sum of Minimums!
// sum-of-minimums
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

const sumOfMinimums = (arr) => arr.reduce((acc, cur) => acc + Math.min(...cur), 0)

sumOfMinimums([
  [7, 9, 8, 6, 2],
  [6, 3, 5, 4, 3],
  [5, 8, 7, 4, 5],
])
sumOfMinimums([
  [11, 12, 14, 54],
  [67, 89, 90, 56],
  [7, 9, 4, 3],
  [9, 8, 6, 7],
])
