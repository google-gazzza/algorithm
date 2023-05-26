/*
sum-without-highest-and-lowest-number

# codewars/8kyu/Sum without highest and lowest number
Difficulty: 8kyu
URL: https://www.codewars.com/kata/576b93db1129fcf2200001e6
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const sumArray = (array) => {
  if (!array || array.length <= 2) {
    return 0;
  }
  
  return array.sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, cur) => acc + cur);
};

// test
console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray());
console.log(sumArray([1, 2]));
