// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv
// Runtime: 432 ms, faster than 18.80% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.
// Memory Usage: 115.3 MB, less than 100.00% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.
const maxProfit = (k, prices) => {
  const pricesLen = prices.length

  if (k >= Math.floor(pricesLen / 2)) {
    let profit = 0
    prices.reduce((prev, cur) => {
      if (cur > prev) {
        profit += cur - prev
      }
      return cur
    }, Number.MAX_SAFE_INTEGER)
    return profit
  }

  const sumMap = new Map()
  const koro = (buyIndex, sellIndex, count) => {
    if (sellIndex >= pricesLen || count >= k) {
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
