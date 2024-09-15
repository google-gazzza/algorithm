/*
918-maximum-sum-circular-subarray
leetcode/medium/918. Maximum Sum Circular Subarray
URL: https://leetcode.com/problems/maximum-sum-circular-subarray/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function kadainsAlgorithm(nums: number[]): number {
  let max: number = Number.MIN_SAFE_INTEGER;
  let currentSum: number = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i += 1) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    max = Math.max(max, currentSum);
  }

  return max;
}

function maxSubarraySumCircular(nums: number[]): number {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const inverseArr = nums.map((num) => -num);
  const maxSubarray = kadainsAlgorithm(nums);
  const maxSubarrayOfInverseArr = kadainsAlgorithm(inverseArr);

  if (maxSubarray < 0) {
    return Math.max(...nums);
  }

  return Math.max(maxSubarray, sum + maxSubarrayOfInverseArr);
}

let nums = [1, -2, 3, -2];
console.log(maxSubarraySumCircular(nums));
// Output: 3

nums = [5, -3, 5];
console.log(maxSubarraySumCircular(nums));
// // Output: 10
//
nums = [-3, -2, -3];
console.log(maxSubarraySumCircular(nums));
// // Output: -2

nums = [1, 1, 1, -1, -1 - 1];
console.log(maxSubarraySumCircular(nums));
