/*
414-third-maximum-number
leetcode/easy/414. Third Maximum Number
Difficulty: easy
URL: https://leetcode.com/problems/third-maximum-number/

NOTE: Description

NOTE: Constraints
  1 <= nums.length <= 104
  -23^1 <= nums[i] <= 23^1 - 1d
NOTE: Explanation
*/

function thirdMax(nums: number[]): number {
  const set = Array.from(new Set(nums))
    .sort((a, b) => b - a);

  if (set.length < 3) {
    return set.shift();
  }

  return set[Math.min(2)];
}


// Example 1:
//
let nums = [3, 2, 1];
console.log(thirdMax(nums));
// Output: 1
// Explanation:
//   The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:
//
nums = [1, 2];
console.log(thirdMax(nums));
// Output: 2
// Explanation:
//   The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
//   Example 3:
//
nums = [2, 2, 3, 1];
console.log(thirdMax(nums));
// Output: 1
// Explanation:
//   The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.
