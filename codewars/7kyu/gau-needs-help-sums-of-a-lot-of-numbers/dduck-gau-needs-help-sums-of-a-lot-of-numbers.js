// gau-needs-help-sums-of-a-lot of numbers
// Gauß needs help! (Sums of a lot of numbers).
// https://www.codewars.com/kata/54df2067ecaa226eca000229/
// https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/gauss-needs-help-sums-of-a-lot-of-numbers-.

const f = (n) => (Number.isInteger(n) && n > 0) ? n * (n + 1) / 2 : false;



console.log(f(100), 5050);
console.log(f(300), 45150);
console.log(f(50000), 1250025000);
console.log(f('n'), false, "n must be a number");
console.log(f(), false, "n must be a value");
console.log(f(3.14), false, "n must be an integer");
console.log(f(0), false, "a value of n greater than 0 is required");
console.log(f(-10), false, "a positive value of n is required");
