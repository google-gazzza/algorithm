/*
find-the-unique.js

# codewars/beta/Find The Unique
Difficulty: beta
URL: https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function findUniq(arr) {
  const reversedArr = arr.slice().reverse();
  return arr.find((e) => {
    if (Number.isNaN(e)) {
      const firstIndex = arr.findIndex(Number.isNaN);
      const lastIndex = arr.length - reversedArr.findIndex(Number.isNaN) - 1;
      return firstIndex === lastIndex;
    }
    return arr.indexOf(e) === arr.lastIndexOf(e);
  });
}

// test
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([4, 4, 'foo', 4]), 'foo');
console.log(findUniq([NaN, NaN, NaN, NaN, NaN, 1]));
