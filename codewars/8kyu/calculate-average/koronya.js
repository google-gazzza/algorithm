// [JS][8kyu] Calculate average
// calculate-average
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

const find_average = (array) =>
  array.length === 0
    ? 0
    : array.reduce((acc, cur) => acc + cur, 0) / array.length;
