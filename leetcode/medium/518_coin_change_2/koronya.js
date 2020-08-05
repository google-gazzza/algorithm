// [Medium] 518. Coin Change 2
// 518_coin_change_2

// https://leetcode.com/problems/coin-change-2
// Runtime: 84 ms, faster than 52.67% of JavaScript online submissions for Coin Change 2.
// Memory Usage: 36.3 MB, less than 90.24% of JavaScript online submissions for Coin Change 2.
const change = (amount, coins) => {
  const dp = Array.from({length: amount + 1}).fill(0)
  dp[0] = 1
  coins.forEach(coin => {
    for (let i = coin; i <= amount; i = i + 1 | 0) {
      dp[i] += dp[i-coin]
    }
  })

  return dp[amount]
}


const getKeyString = arr => arr.reduce((acc, cur) => `${acc}-${cur}`, '')

// Time Limit Exceeded...
const change2 = (amount, coins) => {
  const coinsLen = coins.length
  const coinsSet = new Set()
  coins.sort((a, b) => b - a)
  const backtracking = (sum = 0, accCoins = [], start = 0) => {
    if (sum > amount) {
      return
    }
    if (sum === amount) {
      coinsSet.add(getKeyString(accCoins))
      return
    } else {
      for (let i = start; i < coinsLen; i = i + 1 | 0) {
        const coin = coins[i]
        backtracking(sum + coin, [...accCoins, coin], i)
      }
    }
  }
  backtracking()
  return coinsSet.size
}
