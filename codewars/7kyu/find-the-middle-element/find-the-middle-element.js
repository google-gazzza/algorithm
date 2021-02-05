/*
find-the-middle-element

# codewars/7kyu/Find the middle element
Difficulty: 7kyu
URL: https://www.codewars.com/kata/545a4c5a61aa4c6916000755/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const gimme = (inputArray) => {
  const copy = inputArray.slice(0);
  copy.sort((a, b) => a - b);
  
  return inputArray.indexOf(copy[(copy.length - 1) / 2]);
};

// test
console.log(gimme([2, 3, 1]), 0, 'Finds the index of middle element');
console.log(gimme([5, 10, 14]), 1, 'Finds the index of middle element');
