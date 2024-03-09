// leetcode/medium/322. Coin Change
// 322-coin-change
// URL: https://leetcode.com/problems/coin-change/description/?envType=study-plan-v2&envId=dynamic-programming


function coinChange(coins: number[], amount: number): number {
  coins.sort((a, b) => a - b);
  const dp = [];

  for (let i = 0; i <= amount; i++) {
    dp[i] = i === 0 ? 0 : Infinity;
  }

  for (let i = 1; i <= amount; i++) {
    console.log(dp);
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  if (dp[amount] === Infinity) {
    return -1;
  }

  return dp[amount];
};

let coins = [1, 2, 5];
let amount = 11;
console.log(coinChange(coins, amount));
// Output: 3
// Explanation: 11 = 5 + 5 + 1

coins = [3, 4, 5];
amount = 7;
console.log(coinChange(coins, amount));
// 2


coins = [2];
amount = 3;
// console.log(coinChange(coins, amount));
// Output: -1

coins = [1];
amount = 0;
// console.log(coinChange(coins, amount));
// Output: 0
