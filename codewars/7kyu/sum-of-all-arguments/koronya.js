// [JS][7kyu] Sum of all arguments
// sum-of-all-arguments
// https://www.codewars.com/kata/540c33513b6532cd58000259/train/javascript

function sum() {
  return [...arguments].reduce((acc, curr) => acc + curr, 0)
}

sum(1) === 1
sum(1, 2) === 3
sum(5, 7, 9) === 21
sum(12, 1, 1, 1, 1) === 16
sum(12, 1, 1, 1, 1, 1, 1) === 18
