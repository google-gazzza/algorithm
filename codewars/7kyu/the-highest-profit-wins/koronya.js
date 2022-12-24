// [JS][7kyu] The highest profit wins!
// the-highest-profit-wins
// https://www.codewars.com/kata/559590633066759614000063/train/javascript

const minMax = (arr) => {
  arr.sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1]];
};

minMax([1, 2, 3, 4, 5]);
minMax([2334454, 5]);
minMax([1]);
