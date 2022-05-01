/*
1356-sort-integers-by-the-number-of-1-bits
leetcode/easy/1356. Sort Integers by The Number of 1 Bits
URL: https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
NOTE: Description

NOTE: Constraints
  - 1 <= arr.length <= 500
  - 0 <= arr[i] <= 104

NOTE: Explanation
*/

function countingBit(n: number): number {
  return n.toString(2).split('').reduce((acc, curr) => {
    if (curr === '1') {
      return acc + 1;
    }
    return acc;
  }, 0);
}

function isIncludeNotOneBit(n: number): boolean {
  return countingBit(n) > 1;
}

function sortByBits(arr: number[]): number[] {
  arr.sort((a, b) => a - b);

  if (arr.some(isIncludeNotOneBit)) {
    arr.sort((a, b) => {
      return countingBit(a) - countingBit(b);
    });
  }

  return arr;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(sortByBits(arr));
// Output: [0,1,2,4,8,3,5,6,7]

arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
console.log(sortByBits(arr));
// Output: [1,2,4,8,16,32,64,128,256,512,1024]

arr = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(sortByBits(arr));

arr = [1111, 7644, 1107, 6978, 8742, 1, 7403, 7694, 9193, 4401, 377, 8641, 5311, 624, 3554, 6631];
console.log(sortByBits(arr));