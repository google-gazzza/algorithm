// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// Runtime: 60 ms, faster than 61.30% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
// Memory Usage: 39.6 MB, less than 50.00% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
const maxProfit = prices => {
  const pricesLen = prices.length
  const sumMap = new Map()
  const koro = (buyIndex, sellIndex) => {
    if (sellIndex >= pricesLen) {
      return 0
    }
    const mapStr = `${buyIndex}-${sellIndex}`
    if (sumMap.has(mapStr)) {
      return sumMap.get(mapStr)
    }
    let maxSum = -1
    const diff = prices[sellIndex] - prices[buyIndex]
    if (diff > 0) {
      maxSum = Math.max(maxSum, diff + koro(sellIndex + 2, sellIndex + 3))
      maxSum = Math.max(maxSum, koro(buyIndex, sellIndex + 1))
    } else {
      maxSum = Math.max(maxSum, koro(sellIndex, sellIndex + 1))
    }
    sumMap.set(mapStr, maxSum)
    return maxSum
  }

  return koro(0, 1)
}
