// leetcode/medium/164. Maximum Gap
// 164-maximum-gap
// URL: https://leetcode.com/problems/maximum-gap/description/

function maximumGap(nums: number[]): number {
  let maxGap = 0;

  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i += 1) {
    const gap = nums[i] - nums[i - 1];
    maxGap = Math.max(gap, maxGap);
  }

  return maxGap;
}

let nums = [3, 6, 9, 1];
console.log(maximumGap(nums));
// Output: 3

nums = [10];
console.log(maximumGap(nums));
// Output: 0
