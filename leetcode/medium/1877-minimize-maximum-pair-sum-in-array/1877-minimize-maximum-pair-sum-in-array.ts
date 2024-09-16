/*
1877-minimize-maximum-pair-sum-in-array
leetcode/medium/1877. Minimize Maximum Pair Sum in Array
URL: https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let max = 0;

  for (let i = 0; i < nums.length / 2; i += 1) {
    max = Math.max(max, nums[i] + nums[nums.length - 1 - i]);
  }

  return max;
}

let nums = [3, 5, 2, 3];
console.log(minPairSum(nums));
// Output: 7
// Explanation: The elements can be paired up into pairs (3,3) and (5,2).
//   The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.
// Example 2:

nums = [3, 5, 4, 2, 4, 6];
console.log(minPairSum(nums));
// Output: 8
// Explanation: The elements can be paired up into pairs (3,5), (4,4), and (6,2).
//   The maximum pair sum is max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8.
