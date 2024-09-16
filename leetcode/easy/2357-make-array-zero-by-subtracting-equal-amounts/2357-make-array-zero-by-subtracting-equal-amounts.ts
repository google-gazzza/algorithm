/*
2357-make-array-zero-by-subtracting-equal-amounts
leetcode/easy/2357. Make Array Zero by Subtracting Equal Amounts
URL: https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/

NOTE: Description
NOTE: Constraints
  - 1 <= nums.length <= 100
  - 0 <= nums[i] <= 100
NOTE: Explanation
NOTE: Reference
*/

function minimumOperations(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let count = 0;

  while (nums.length) {
    nums = nums.filter((n) => n !== 0);
    if (nums.length) {
      count += 1;
    }
    nums = nums.map((n) => n - nums[0]);
  }

  return count;
}

let nums = [1, 5, 0, 3, 5];
console.log(minimumOperations(nums));
// Output: 3
// Explanation:
//   In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
//   In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
//   In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
//   Example 2:
nums = [0];
console.log(minimumOperations(nums));
// Output: 0
// Explanation: Each element in nums is already 0 so no operations are needed.
