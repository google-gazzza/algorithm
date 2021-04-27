/*
sorting-by-bits

# codewars/6kyu/Sorting by bits
Difficulty: 6kyu
URL: https://www.codewars.com/kata/59fa8e2646d8433ee200003f/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const countBits = (num) => (num.toString(2).match(/1/g) || []).length;

function sortByBit(arr) {
  arr.sort((a, b) => {
    const compareResult = countBits(a) - countBits(b);
    if (compareResult === 0) {
      return a - b;
    }
    return compareResult;
  });
  
  return arr;
}


// Basic test
let a = [3, 8, 3, 6, 5, 7, 9, 1];
sortByBit(a);
console.log(a, [1, 8, 3, 3, 5, 6, 9, 7]);

let b = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0];
sortByBit(b);

console.log(b, [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);
