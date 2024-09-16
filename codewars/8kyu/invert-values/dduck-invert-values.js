// invert-values
// Invert values
// difficult: 8kyu
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/invert-values

const invert = (array) => array.map((v) => v * -1);



console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);
