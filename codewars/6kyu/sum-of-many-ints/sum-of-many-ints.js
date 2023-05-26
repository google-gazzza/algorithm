/*
sum-of-many-ints

# codewars/6kyu/Sum of many ints
Difficulty: 6kyu
URL: https://www.codewars.com/kata/54c2fc0552791928c9000517/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const sum = (n) => (n * (2 * n - (n - 1))) / 2;

function f(n, m) {
  const quotient = Math.floor(n / m);
  const remainder = Math.floor(n % m);
  
  return sum(m - 1) * quotient + sum(remainder);
}

// test
console.log(f(10, 5), 20);
console.log(f(20, 20), 190);
console.log(f(15, 10), 60);
