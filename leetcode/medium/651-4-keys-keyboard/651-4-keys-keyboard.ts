// leetcode/medium/651. 4 Keys Keyboard
// 651-4-keys-keyboard
// URL: https://leetcode.com/problems/4-keys-keyboard/description/?envType=study-plan-v2&envId=premium-algo-100

function maxA(n: number): number {
  const dp = [1,2,3,4,5,6]

  for (let i = 6; i < n; i++) {
    dp[i] = Math.max(dp[i-3]*2, dp[i-4]*3, dp[i-5]*4, dp[i-6]*5)
  }

  return dp[n-1]
};

console.log(maxA(15));
