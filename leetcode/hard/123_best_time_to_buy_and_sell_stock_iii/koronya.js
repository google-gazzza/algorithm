// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii
// Runtime: 72 ms, faster than 40.00% of JavaScript online submissions for Best Time to Buy and Sell Stock III.
// Memory Usage: 38.5 MB, less than 50.00% of JavaScript online submissions for Best Time to Buy and Sell Stock III.
const maxProfit = prices => {
  const pricesLen = prices.length
  const sumMap = new Map()
  const koro = (buyIndex, sellIndex, count) => {
    if (sellIndex >= pricesLen || count >= 2) {
      return 0
    }
    const mapStr = `${buyIndex}-${sellIndex}-${count}`
    if (sumMap.has(mapStr)) {
      return sumMap.get(mapStr)
    }
    let maxSum = -1
    const diff = prices[sellIndex] - prices[buyIndex]
    if (diff > 0) {
      maxSum = Math.max(maxSum, diff + koro(sellIndex + 1, sellIndex + 2, count + 1))
      maxSum = Math.max(maxSum, koro(buyIndex, sellIndex + 1, count))
    } else {
      maxSum = Math.max(maxSum, koro(sellIndex, sellIndex + 1, count))
    }
    sumMap.set(mapStr, maxSum)
    return maxSum
  }

  return koro(0, 1, 0)
}
