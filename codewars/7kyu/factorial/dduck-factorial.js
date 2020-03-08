// https://www.codewars.com/kata/factorial-1/train/javascript

const factorial = (n, sum = 1) => (n ? factorial(n - 1, sum * n) : sum);

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);
