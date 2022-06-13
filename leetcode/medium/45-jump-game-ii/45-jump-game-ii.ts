/*
45-jump-game-ii
leetcode/medium/45. Jump Game II
URL: https://leetcode.com/problems/jump-game-ii/

NOTE: Description
NOTE: Constraints
  - 1 <= nums.length <= 104
  - 0 <= nums[i] <= 1000
NOTE: Explanation
NOTE: Reference
*/

function jump(nums: number[]): number {
  const dp: number[] = [0];

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < i + 1 + nums[i]; j += 1) {
      if (!dp[j]) {
        dp[j] = dp[i] + 1;
      } else {
        dp[j] = Math.min(dp[j], dp[i] + 1);
      }
    }
  }

  return dp[nums.length - 1];
}

let nums = [2, 3, 1, 1, 4];
console.log(jump(nums));

nums = [2, 3, 0, 1, 4];
console.log(jump(nums));
