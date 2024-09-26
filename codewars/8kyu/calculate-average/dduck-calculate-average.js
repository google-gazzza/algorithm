// calculate-average
// Calculate average
// difficulty: 8kyu
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/

const find_average = (array) => array.reduce((acc, cur) => acc + cur) / array.length;

console.log(find_average([1, 1, 1]), 1);
console.log(find_average([1, 2, 3]), 2);
