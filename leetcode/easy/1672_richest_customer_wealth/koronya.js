// [Easy] 1672. Richest Customer Wealth
// 1672_richest_customer_wealth

// Runtime: 76 ms, faster than 80.99% of JavaScript online submissions for Richest Customer Wealth.
// Memory Usage: 38.5 MB, less than 64.87% of JavaScript online submissions for Richest Customer Wealth.
const sumFnc = (a, b) => a + b
const maximumWealth = function (accounts) {
  return accounts.reduce((accMax, cur) => Math.max(accMax, cur.reduce(sumFnc, 0)), 0)
}
