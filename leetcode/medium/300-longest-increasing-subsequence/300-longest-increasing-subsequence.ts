// leetcode/medium/300. Longest Increasing Subsequence
// 300-longest-increasing-subsequence
// URL: https://leetcode.com/problems/longest-increasing-subsequence/description/?envType=study-plan-v2&envId=dynamic-programming


function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};


let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
// Output: 4

nums = [0, 1, 0, 3, 2, 3];
console.log(lengthOfLIS(nums));
// Output: 4

nums = [7, 7, 7, 7, 7, 7, 7];
console.log(lengthOfLIS(nums));
// Output: 1
