// [Medium] 322. Coin Change
// 322_coin_change

// https://leetcode.com/problems/coin-change
// Runtime: 164 ms, faster than 31.73% of JavaScript online submissions for Coin Change.
// Memory Usage: 42.9 MB, less than 13.29% of JavaScript online submissions for Coin Change.
const coinChange = (coins, amount) => {
  const map = [0]
  for (let i = 1; i <= amount; i = i + 1 | 0) {
    const candidateArr = []
    coins.forEach(coin => {
      const before = i - coin
      if (before >= 0) {
        candidateArr.push(map[before])
      }
    })
    map[i] = Math.min(...candidateArr) + 1
  }

  const result = map[amount]
  return result === Infinity ? -1 : result
}

// timeover...T_T
const coinChange2 = (coins, amount) => {
  coins.sort((a, b) => b - a)
  const coinsLen = coins.length
  let minCount = Number.MAX_SAFE_INTEGER
  const dfs = (sum = 0, length = 0, start = 0) => {
    if (sum > amount || length > minCount) {
      return
    }
    if (sum === amount) {
      minCount = length
    } else {
      length += 1
      for (let i = start; i < coinsLen; i = i + 1 | 0) {
        dfs(sum + coins[i], length, i)
      }
    }
  }
  dfs()

  return minCount === Number.MAX_SAFE_INTEGER
    ? -1
    : minCount
}
