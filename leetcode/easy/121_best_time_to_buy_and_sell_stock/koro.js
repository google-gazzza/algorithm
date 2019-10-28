// https://leetcode.com/problems/best-time-to-buy-and-sell-stock
// Runtime: 52 ms, faster than 95.26% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 35.4 MB, less than 77.78% of JavaScript online submissions for Best Time to Buy and Sell Stock.
const maxProfit = (prices) => {
  const pricesLen = prices.length
  let dist = 0
  let min = prices[0]

  for (let i = 1; i < pricesLen; i += 1) {
    const item = prices[i]
    const newDist = item - min
    if (newDist > dist) {
      dist = newDist
    }
    if (min > item) {
      min = item
    }
  }

  return dist
}

