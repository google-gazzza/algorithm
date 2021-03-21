/*
how-many-are-smaller-than-me

# codewars/7kyu/How many are smaller than me?
Difficulty: 7kyu
URL: https://www.codewars.com/kata/56a1c074f87bc2201200002e/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function smaller(nums) {
  return nums.map((e, i, arr) => {
    return arr.slice(i).filter((e2) => e > e2).length;
  });
}

// test
console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);
