/*
# leetcode/medium/https://leetcode.com/problems/arithmetic-slices/description/
# 413-arithmetic-slices
# URL: https://leetcode.com/problems/arithmetic-slices/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function numberOfArithmeticSlices(nums: number[]): number {
  let count = 0;

  for (let i = 1; i < nums.length; i += 1) {
    const diff = nums[i] - nums[i - 1];

    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j - 1] + diff === nums[j]) {
        count += 1;
      } else {
        break;
      }
    }
  }

  return count;
}

let nums = [1, 2, 3, 4];
numberOfArithmeticSlices(nums);
// Output: 3

nums = [1];
numberOfArithmeticSlices(nums);
// Output: 0
