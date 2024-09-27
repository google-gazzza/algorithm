// [Medium] 1833. Maximum Ice Cream Bars
// 1833_maximum_ice_cream_bars

// https://leetcode.com/problems/maximum-ice-cream-bars
// Runtime: 240 ms, faster than 66.67% of TypeScript online submissions for Maximum Ice Cream Bars.
// Memory Usage: 53.8 MB, less than 58.33% of TypeScript online submissions for Maximum Ice Cream Bars.

function maxIceCream(costs: number[], coins: number): number {
  const costsLen: number = costs.length
  let totalCosts: number = 0
  let totalNumbers: number = 0
  costs.sort((a, b) => a - b)
  for (let i: number = 0; i < costsLen; i += 1) {
    const cost: number = costs[i]
    totalCosts += cost
    if (totalCosts <= coins) {
      totalNumbers += 1
    } else {
      return totalNumbers
    }
  }
  return totalNumbers
}

maxIceCream([1, 3, 2, 4, 1], 7) //?
maxIceCream([10, 6, 8, 7, 7, 8], 5) //?
maxIceCream([1, 6, 3, 1, 2, 5], 20) //?
