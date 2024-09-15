// [JS][8kyu] Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

const positiveSum = (arr) =>
  arr.reduce((acc, cur) => (cur > 0 ? acc + cur : acc), 0);

positiveSum([1, 2, 3, 4, 5]) === 15;
positiveSum([1, -2, 3, 4, 5]) === 13;
positiveSum([]) === 0;
positiveSum([-1, -2, -3, -4, -5]) === 0;
positiveSum([-1, 2, 3, 4, -5]) === 9;
