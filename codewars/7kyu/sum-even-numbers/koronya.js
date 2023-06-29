// [JS][7kyu] Sum even numbers
// sum-even-numbers
// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

const sumEvenNumbers = (input) => input.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)

sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 30
