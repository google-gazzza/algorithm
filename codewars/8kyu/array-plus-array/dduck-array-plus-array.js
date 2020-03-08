// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/

const sum = (arr) => arr.reduce((a, c) => a + c, 0);
const arrayPlusArray = (arr1, arr2) => sum([sum(arr1), sum(arr2)]);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

