// [JS][8kyu] Get the mean of an array
// get-the-mean-of-an-array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

const getAverage = (marks) => Math.floor(marks.reduce((sum, acc) => sum + acc, 0) / marks.length)

getAverage([2, 2, 2, 2]) === 2
getAverage([1, 2, 3, 4, 5]) === 3
getAverage([1, 1, 1, 1, 1, 1, 1, 2]) === 1
