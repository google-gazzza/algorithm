/*
number-of-trailing-zeros-of-n

# codewars/5kyu/Number of trailing zeros of N!
Difficulty: 5kyu
URL: https://www.codewars.com/kata/52f787eb172a8b4ae1000a34
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const zeros = (n) => {
  let count = 1;
  let sum = 0;
  
  while ((5 ** count) <= n) {
    sum += Math.floor(n / (5 ** count));
    count += 1;
  }
  
  return sum;
};

console.log(zeros(0), 0, 'Testing with n = 0');
console.log(zeros(5), 1, 'Testing with n = 5');
console.log(zeros(6), 1, 'Testing with n = 6');
console.log(zeros(30), 7, 'Testing with n = 30');
