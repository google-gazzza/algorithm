// multiplication-tables
// Multiplication Tables
// difficult: 6kyu
// https://www.codewars.com/kata/5432fd1c913a65b28f000342/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/multiplication-tables

const multiplicationTable = (row, col) => {
  return new Array(row).fill(0)
    .map((row, rowIndex) => {
      return new Array(col).fill(0)
        .map((column, columnIndex) => (rowIndex + 1) * (columnIndex + 1));
    });
};


console.log(multiplicationTable(2, 2), [[1, 2], [2, 4]]);
console.log(multiplicationTable(3, 3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
console.log(multiplicationTable(3, 4), [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]);
console.log(multiplicationTable(4, 4), [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
console.log(multiplicationTable(2, 5), [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10]]);
