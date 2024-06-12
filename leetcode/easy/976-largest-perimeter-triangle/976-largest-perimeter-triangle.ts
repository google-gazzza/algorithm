/*
976-largest-perimeter-triangle
leetcode/easy/976. Largest Perimeter Triangle
URL: https://leetcode.com/problems/largest-perimeter-triangle/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => b - a);

  for (let i = 2; i < nums.length; i += 1) {
    if (nums[i - 2] < (nums[i - 1] + nums[i])) {
      return nums.slice(i - 2, i + 1)
        .reduce((acc, cur) => acc + cur);
    }
  }

  return 0;
}

let nums = [2, 1, 2];
console.log(largestPerimeter(nums));
// // Output: 5
// Example 2:

nums = [1, 2, 1];
console.log(largestPerimeter(nums));
// Output: 0
