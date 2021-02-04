/*
sum-of-all-the-multiples-of-3-or-5

# codewars/7kyu/Sum of all the multiples of 3 or 5
Difficulty: 7kyu
URL: https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const findSum = (n) => {
  let sum = 0;
  
  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  
  return sum;
};

// test
console.log(findSum(5), 8);
console.log(findSum(10), 33);
