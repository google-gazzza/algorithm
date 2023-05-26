/*
1426-counting-elements
leetcode/easy/1426. Counting Elements
URL: https://leetcode.com/problems/counting-elements/

NOTE: Description
NOTE: Constraints
  - 1 <= arr.length <= 1000
  - 0 <= arr[i] <= 1000

NOTE: Explanation
NOTE: Reference
*/

function countElements(arr: number[]): number {
  const set = new Set(arr);

  return arr.reduce((acc, curr) => {
    if (set.has(curr + 1)) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

let arr = [1, 2, 3];
console.log(countElements(arr));
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

arr = [1, 1, 3, 3, 5, 5, 7, 7];
console.log(countElements(arr));
// Output: 0
// Explanation: No numbers are counted, cause there is no 2, 4, 6, or 8 in arr.
