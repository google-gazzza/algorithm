// get-the-mean-of-an-array
// Get the mean of an array
// difficulty: 8kyu
// https://www.codewars.com/kata/563e320cee5dddcf77000158/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/get-the-mean-of-an-array

const getAverage = (arr) => Math.floor(arr.reduce((acc, cur) => acc + cur) / arr.length);



console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5,]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
