/*
2239-find-closest-number-to-zero
leetcode/easy/2239. Find Closest Number to Zero
URL: https://leetcode.com/problems/find-closest-number-to-zero/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function findClosestNumber(nums: number[]): number {
  let min = Number.MAX_VALUE;

  nums.forEach((num) => {
    if (Math.abs(num) < Math.abs(min)) {
      min = num;
    }
    if (Math.abs(num) === Math.abs(min)) {
      min = Math.max(min, num);
    }
  });

  return min;
}

let nums = [-4, -2, 1, 4, 8];
console.log(findClosestNumber(nums));
// Output: 1
// Explanation:
//   The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.
// Example 2:
//
nums = [2, -1, 1];
console.log(findClosestNumber(nums));
// Output: 1
// Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.
