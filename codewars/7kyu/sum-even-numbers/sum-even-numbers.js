// sum-even-numbers
// Sum even numbers
// difficulty: 7kyu
// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/

const sumEvenNumbers = (arr) => arr.reduce((acc, cur) => (cur % 2 === 0 ? acc + cur : acc), 0);

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//? 30
