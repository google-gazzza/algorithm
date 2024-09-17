// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
// Runtime: 56 ms, faster than 83.61% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 35.3 MB, less than 85.71% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
const maxProfit = prices => {
  let profit = 0
  prices.reduce((prev, cur) => {
    if (cur > prev) {
      profit += cur - prev
    }
    return cur
  }, Number.MAX_SAFE_INTEGER)
  return profit
}
