// pyramid-array
// Pyramid Array
// difficulty: 6kyu
// https://www.codewars.com/kata/515f51d438015969f7000013/

const pyramid = (n) => new Array(n).fill(0)
  .map((e, i) => new Array(i + 1).fill(1));


console.log(pyramid(0), []);
console.log(pyramid(1), [[1]]);
console.log(pyramid(2), [[1], [1, 1]]);
console.log(pyramid(3), [[1], [1, 1], [1, 1, 1]]);
