/*
simple-remove-duplicates

# codewars/7kyu/Simple remove duplicates
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5ba38ba180824a86850000f7
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const solve = (inputArr) => inputArr.filter((e, i, arr) => arr.lastIndexOf(e) === i);

// test
console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
console.log(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
console.log(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
console.log(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);
