/*
852-peak-index-in-a-mountain-array
leetcode/easy/852. Peak Index in a Mountain Array
URL: https://leetcode.com/problems/peak-index-in-a-mountain-array/

NOTE: Description

NOTE: Constraints
   - 1 <= w.length <= 104
   - 1 <= w[i] <= 105
   - pickIndex will be called at most 104 times.

NOTE: Explanation
*/

function peakIndexInMountainArray(arr: number[]): number {
  let pickIndex = 0;

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > arr[i - 1]) {
      pickIndex = i;
    } else {
      break;
    }
  }

  return pickIndex;
}

// Example 1:
//
let arr = [0, 1, 0];
console.log(peakIndexInMountainArray(arr));
// Output: 1
// Example 2:
//
arr = [0, 2, 1, 0];
console.log(peakIndexInMountainArray(arr));
// Output: 1
// Example 3:
//
arr = [0, 10, 5, 2];
console.log(peakIndexInMountainArray(arr));
// Output: 1

arr = [10, 5, 2];
console.log(peakIndexInMountainArray(arr));

arr = [1, 5, 11];
console.log(peakIndexInMountainArray(arr));
