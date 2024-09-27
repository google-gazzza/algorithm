/*
1200-minimum-absolute-difference
leetcode/easy/1200. Minimum Absolute Difference
Difficulty: easy
URL: https://leetcode.com/problems/minimum-absolute-difference/

NOTE: Description

NOTE: Constraints
  - 2 <= arr.length <= 105
  - -106 <= arr[i] <= 106

NOTE: Explanation
*/

function minimumAbsDifference(arr: number[]): number[][] {
  const arrCopy = arr.slice().sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  let result: number[][] = [];

  for (let i = 1; i < arrCopy.length; i += 1) {
    const absDiff = Math.abs(arrCopy[i] - arrCopy[i - 1]);
    if (absDiff < min) {
      result = [];
      min = absDiff;
      result.push([arrCopy[i - 1], arrCopy[i]]);
    } else if (absDiff === min) {
      result.push([arrCopy[i - 1], arrCopy[i]]);
    }
  }

  return result;
}

// Example 1:
let arr = [4, 2, 1, 3];
console.log(minimumAbsDifference(arr));
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
//   Example 2:
//
arr = [1, 3, 6, 10, 15];
console.log(minimumAbsDifference(arr));
// Output: [[1,3]]
// Example 3:
//
arr = [3, 8, -10, 23, 19, -4, -14, 27];
console.log(minimumAbsDifference(arr));
// Output: [[-14,-10],[19,23],[23,27]]
