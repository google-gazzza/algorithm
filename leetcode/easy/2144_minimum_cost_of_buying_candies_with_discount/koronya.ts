// [Easy] 2144. Minimum Cost of Buying Candies With Discount
// 2144_minimum_cost_of_buying_candies_with_discount

// https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Minimum Cost of Buying Candies With Discount.
// Memory Usage: 40.6 MB, less than 100.00% of TypeScript online submissions for Minimum Cost of Buying Candies With Discount.

function minimumCost(cost: number[]): number {
  const costLen = cost.length
  cost.sort((a, b) => b - a)
  let result: number = 0
  let target: number = 0
  while (costLen - target > 2) {
    result += cost[target] + cost[target + 1]
    target += 3
  }
  const diff: number = costLen - target
  if (diff > 0) {
    result += diff === 1 ? cost[target] : cost[target] + cost[target + 1]
  }

  return result
}

minimumCost([1, 2, 3]) //?
minimumCost([6, 5, 7, 9, 2, 2]) //?
minimumCost([5, 5]) //?
