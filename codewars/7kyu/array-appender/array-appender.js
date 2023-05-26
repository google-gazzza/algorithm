/*
array-appender

# codewars/7kyu/Array Appender
Difficulty: 7kyu
URL: https://www.codewars.com/kata/53a8a476947277a3020001cc/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function appendArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// test
console.log(appendArrays([1, 2], [2, 4]), [1, 2, 2, 4]);
console.log(appendArrays([1, 2], [3, 4]), [1, 2, 3, 4]);
console.log(appendArrays(['this'], ['that']), ['this', 'that']);
console.log(appendArrays(['a', 'B'], ['c', 'D']), ['a', 'B', 'c', 'D']);
console.log(appendArrays([1, 2], [1]), [1, 2, 1]);
