// recursion-1-factorial
// Recursion #1 - Factorial
// difficulty: 7kyu
// https://www.codewars.com/kata/5694cb0ec554589633000036/

const factorial = (n, sum = 1) => n ? factorial(n - 1, n * sum) : sum;

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(2), 2);
console.log(factorial(3), 6)
