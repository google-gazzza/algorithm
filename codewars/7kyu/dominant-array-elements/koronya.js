// [JS][7kyu] Dominant array elements
// dominant-array-elements
// https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript

const solve = (arr) => arr.filter((num, i) => arr.slice(i + 1).every((n) => n < num))

solve([1, 21, 4, 7, 5])
solve([5, 4, 3, 2, 1])
