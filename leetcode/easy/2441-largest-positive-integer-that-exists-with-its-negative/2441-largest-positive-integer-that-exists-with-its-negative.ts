/*
2441-largest-positive-integer-that-exists-with-its-negative
leetcode/easy/2441. Largest Positive Integer That Exists With Its Negative
URL: https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function findMaxK(nums: number[]): number {
  const set = new Set(nums);
  let max = -1;

  set.forEach((num) => {
    if (nums && set.has(-num)) {
      max = Math.max(max, num);
    }
  });

  return max;
}

let nums = [-1, 2, -3, 3];
console.log(findMaxK(nums));
// Output: 3

nums = [-1, 10, 6, 7, -7, 1];
console.log(findMaxK(nums));
// Output: 7

nums = [-10, 8, 6, 7, -2, -3];
console.log(findMaxK(nums));
// Output: -1
