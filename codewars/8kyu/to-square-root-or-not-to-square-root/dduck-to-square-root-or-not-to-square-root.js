// to-square-root-or-not-to-square-root
// To square(root) or not to square(root)
// difficulty: 8kyu
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/to-square-root-or-not-to-square-root

const squareOrSquareRoot = (array) => array.map((v) => Math.sqrt(v) % 1 === 0 ? Math.sqrt(v) : v ** 2);


var input = [4, 3, 9, 7, 2, 1];
var expected = [2, 9, 3, 49, 4, 1];
console.log(squareOrSquareRoot(input), expected);

input = [100, 101, 5, 5, 1, 1];
expected = [10, 10201, 25, 25, 1, 1];
console.log(squareOrSquareRoot(input), expected);

input = [1, 2, 3, 4, 5, 6];
expected = [1, 4, 9, 2, 25, 36];
console.log(squareOrSquareRoot(input), expected);
