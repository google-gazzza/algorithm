// https://www.codewars.com/kata/simple-fun-number-37-house-numbers-sum

const houseNumbersSum = (arr) => arr.slice(0, arr.indexOf(0)).reduce((acc, cur) => acc + cur, 0);

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]), 11);
console.log(houseNumbersSum([4, 2, 1, 6, 0]), 13);
console.log(houseNumbersSum([4, 1, 2, 3, 0, 10, 2]), 10);
console.log(houseNumbersSum([0, 1, 2, 3, 4, 5]), 0);
