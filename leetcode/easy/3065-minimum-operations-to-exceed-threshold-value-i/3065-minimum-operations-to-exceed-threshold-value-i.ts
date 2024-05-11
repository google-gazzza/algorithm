// 3065-minimum-operations-to-exceed-threshold-value-i
// URL: https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/description/

function minOperations(nums: number[], k: number): number {
    return nums.length - nums.filter((e) => e >= k).length;
  };
  