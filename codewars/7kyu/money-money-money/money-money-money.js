/*
money-money-money

# codewars/7kyu/Money, Money, Money
Difficulty: 7kyu
URL: https://www.codewars.com/kata/563f037412e5ada593000114/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/
function calculateYears(p, i, t, d) {
  return Math.ceil(Math.log(d / p) / Math.log(1 + (i * (1 - t))));
}

// function calculateYears(p, i, t, d) {
//   let count = 0;
//
//   while (p < d) {
//     p = p * (1 + (i * (1 - t)));
//     count += 1;
//   }
//
//   return count;
// }

// test
console.log(calculateYears(1000, 0.05, 0.18, 1100), 3);
console.log(calculateYears(1000, 0.01625, 0.18, 1200), 14);
console.log(calculateYears(1000, 0.05, 0.18, 1000), 0);
