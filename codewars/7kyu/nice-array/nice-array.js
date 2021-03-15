/*
nice-array

# codewars/7kyu/Nice Array
Difficulty: 7kyu
URL: https://www.codewars.com/kata/59b844528bcb7735560000a0
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function isNice(inputArray) {
  if (!inputArray.length) {
    return false;
  }
  
  return inputArray.every((e, i, arr) => {
    return arr.some((e2) => {
      return e2 - 1 === e || e2 + 1 === e;
    });
  });
}

// test
console.log(isNice([2, 10, 9, 3]), true);
console.log(isNice([3, 4, 5, 7]), false);
