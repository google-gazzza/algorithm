// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

const sumOfDifferences = (input) => input.sort((a, b) => a - b)
  .map((cur, index, arr) => cur - arr[index - 1])
  .reduce((acc, cur) => (Number.isInteger(cur) ? acc + cur : 0), 0);

const arr = [10, 1, 2];
console.log(sumOfDifferences(arr));
