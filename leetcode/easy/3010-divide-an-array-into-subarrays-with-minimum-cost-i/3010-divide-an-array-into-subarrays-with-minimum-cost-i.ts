// 3010-divide-an-array-into-subarrays-with-minimum-cost-i
// URL: https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/description/

function minimumCost(nums: number[]): number {
    const first = nums.shift();
  
    return nums.sort((a, b) => a - b)
      .slice(0, 2)
      .reduce((acc, curr, i) => acc + curr, 0) + first;
  };
  