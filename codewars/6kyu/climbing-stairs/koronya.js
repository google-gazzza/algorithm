// [JS][6kyu] Climbing Stairs
// climbing-stairs
// https://www.codewars.com/kata/64b7c03910f916000f493f5d/train/javascript

const climbingStairs = (cost) => {
  const n = cost.length
  const dp = Array(n + 1).fill(0)
  dp[0] = cost[0]
  dp[1] = cost[1]
  for (let i = 2; i < n; i += 1) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
  }
  return Math.min(dp[n - 1], dp[n - 2])
}

climbingStairs([10, 15, 20]) === 15
climbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) === 6
climbingStairs([0, 2, 2, 1]) === 2
climbingStairs([0, 2, 3, 2]) === 3
climbingStairs([0, 0, 0, 0, 0, 0]) === 0
