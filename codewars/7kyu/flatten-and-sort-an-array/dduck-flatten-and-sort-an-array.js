// flatten-and-sort-an-array
// Flatten and sort an array
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/flatten-and-sort-an-array

const flattenAndSort = (array) => array.reduce((acc, cur) => acc.concat(cur), [])
  .sort((a, b) => a - b);

// const flattenAndSort = (array) => array.flat().sort((a, b) => a - b);



console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
