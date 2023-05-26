/*
1619-mean-of-array-after-removing-some-elements
leetcode/easy/1619. Mean of Array After Removing Some Elements
URL: https://leetcode.com/problems/mean-of-array-after-removing-some-elements/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function trimMean(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const targetRange = Math.ceil((arr.length / 100) * 5);
  arr.splice(0, targetRange);
  arr.splice(arr.length - targetRange, targetRange);

  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

let arr = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3];
console.log(trimMean(arr));
// Output: 2.00000

arr = [6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0];
console.log(trimMean(arr));
// Output: 4.00000

arr = [6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4];
console.log(trimMean(arr));
// Output: 4.77778;
