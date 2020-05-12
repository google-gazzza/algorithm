// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee
// Runtime: 72 ms, faster than 90.79% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee.
// Memory Usage: 44.8 MB, less than 50.00% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee.
const maxProfit = (prices, fee) => {
  const pricesLen = prices.length
  let profit = 0
  let bought = -prices[0]

  for (let i = 1; i < pricesLen; i = i + 1 | 0) {
    const sell = prices[i]
    profit = Math.max(profit, bought + sell - fee)
    bought = Math.max(bought, profit - sell)
  }

  return profit
}
