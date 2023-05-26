/*
max-min-arrays

# codewars/7kyu/Max-min arrays
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5a090c4e697598d0b9000004
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function solve(arr) {
  const result = [];
  arr.sort((a, b) => a - b);
  
  while (arr.length) {
    result.push(arr.pop());
    
    if (arr.length) {
      result.push(arr.shift());
    }
  }
  
  return result;
}

// test
console.log(solve([15, 11, 10, 7, 12]), [15, 7, 12, 10, 11]);
console.log(solve([91, 75, 86, 14, 82]), [91, 14, 86, 75, 82]);
console.log(solve([84, 79, 76, 61, 78]), [84, 61, 79, 76, 78]);
console.log(solve([52, 77, 72, 44, 74, 76, 40]), [77, 40, 76, 44, 74, 52, 72]);
console.log(solve([1, 6, 9, 4, 3, 7, 8, 2]), [9, 1, 8, 2, 7, 3, 6, 4]);
console.log(solve([78, 79, 52, 87, 16, 74, 31, 63, 80]), [87, 16, 80, 31, 79, 52, 78, 63, 74]);
