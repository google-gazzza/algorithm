// [JS][8kyu] Square(n) Sum
// square-n-sum
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

const squareSum = (numbers) => numbers.reduce((acc, cur) => acc + cur * cur, 0);

squareSum([1, 2]) === 5;
squareSum([0, 3, 4, 5]) === 50;
squareSum([]) === 0;
