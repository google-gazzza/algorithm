/*
sub-array-elements-sum

# codewars/7kyu/Sub-array elements sum
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5b5e0ef007a26632c400002a/

## Approach

### en

### kr

## Solution
### JavaScript

*/

const elementsSum = (inputArr, defaultValue = 0) => inputArr.reduce((acc, cur, i, arr) => {
  if (arr[i][arr.length - 1 - i] === undefined) {
    acc += defaultValue;
  } else {
    acc += arr[i][arr.length - 1 - i];
  }
  
  return acc;
}, 0);

// test
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]));
// , 16;
console.log(elementsSum([[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]]));
// // , 15;
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []]));
// // , 7;
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5));
// // , 12;
console.log(elementsSum([[3, 2], [4], []]));
// // , 0;
