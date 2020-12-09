// [Easy] 1672. Richest Customer Wealth
// 1672_richest_customer_wealth

// Runtime: 76 ms, faster than 93.33% of TypeScript online submissions for Richest Customer Wealth.
// Memory Usage: 40.1 MB, less than 81.11% of TypeScript online submissions for Richest Customer Wealth.
const sumFnc = (a: number, b: number): number => a + b
function maximumWealth (accounts: number[][]): number {
  return accounts.reduce((accMax: number, cur: number[]): number => Math.max(accMax, cur.reduce(sumFnc, 0)), 0)
}
