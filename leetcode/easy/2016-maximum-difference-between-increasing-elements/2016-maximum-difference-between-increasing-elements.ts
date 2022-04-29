/*
2016-maximum-difference-between-increasing-elements
leetcode/easy/2016. Maximum Difference Between Increasing Elements
URL: https://leetcode.com/problems/maximum-difference-between-increasing-elements/
NOTE: Description

NOTE: Constraints
  - n == nums.length
  - 2 <= n <= 1000
  - 1 <= nums[i] <= 109

NOTE: Explanation
*/

function maximumDifference(nums: number[]): number {
  let lower = nums[0];
  let higher = nums[0];
  let maxDiff = 0;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < lower) {
      maxDiff = Math.max(maxDiff, higher - lower);
      lower = nums[i];
      higher = nums[i];
    }
    if (nums[i] > higher) {
      higher = nums[i];
    }
  }

  maxDiff = Math.max(maxDiff, higher - lower);

  if (maxDiff === 0) {
    return -1;
  }

  return maxDiff;
}

let nums = [7, 1, 5, 4];
console.log(maximumDifference(nums));
// Output: 4

nums = [9, 4, 3, 2];
console.log(maximumDifference(nums));
// Output: -1

nums = [1, 5, 2, 10];
console.log(maximumDifference(nums));
// Output: 9

nums = [87, 68, 91, 86, 58, 63, 43, 98, 6, 40];
console.log(maximumDifference(nums));
// Output: 55
