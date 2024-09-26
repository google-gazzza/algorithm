/*
1413-minimum-value-to-get-positive-step-by-step-sum
leetcode/easy/1413. Minimum Value to Get Positive Step by Step Sum
Difficulty: easy
URL: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

NOTE: Description

NOTE: Constraints
  - 1 <= nums.length <= 100
  - -100 <= nums[i] <= 100

NOTE: Explanation
*/

function minStartValue(nums: number[]): number {
  let min = Number.MAX_SAFE_INTEGER;

  nums.reduce((acc, cur) => {
    const next = acc + cur;
    min = Math.min(min, next);

    return next;
  }, 0);

  if (min < 1) {
    return (min * -1) + 1;
  }

  return 1;
}

let nums = [-3, 2, -3, 4, 2];
console.log(minStartValue(nums));
// Output: 5

nums = [1, 2];
console.log(minStartValue(nums));
// Output: 1

nums = [1, -2, -3];
console.log(minStartValue(nums));
// Output: 5

nums = [-3, 6, 2, 5, 8, 6];
console.log(minStartValue(nums));
