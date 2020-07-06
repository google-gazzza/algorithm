// coefficients-of-the-quadratic-equation
// Coefficients of the Quadratic Equation
// difficulty - 8kyu
// https://www.codewars.com/kata/5d59576768ba810001f1f8d6
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/coefficients-of-the-quadratic-equation

const quadratic = (x1, x2) => [1, -x1 + -x2, -x1 * -x2];


console.log(quadratic(0, 1), [1, -1, 0]);
console.log(quadratic(1, 1), [1, -2, 1]);
console.log(quadratic(-4, -9), [1, 13, 36]);
console.log(quadratic(-5, -4), [1, 9, 20]);
console.log(quadratic(4, -9), [1, 5, -36]);
console.log(quadratic(5, -4), [1, -1, -20]);
