// [Easy] 746. Min Cost Climbing Stairs
// 746_min_cost_climbing_stairs

// https://leetcode.com/problems/min-cost-climbing-stairs
// Runtime: 88 ms, faster than 83.64% of TypeScript online submissions for Min Cost Climbing Stairs.
// Memory Usage: 40.2 MB, less than 78.18% of TypeScript online submissions for Min Cost Climbing Stairs.

/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost: number[]): number {
  const minCostArr: number[] = [cost[0], cost[1]]
  const costLen: number = cost.length
  if (costLen === 1) {
    return 0
  } else if (costLen === 2) {
    return Math.min(...minCostArr)
  }

  for (let i: number = 2; i < costLen; i += 1) {
    const minCost: number = cost[i] + Math.min(...minCostArr)
    minCostArr[0] = minCostArr[1]
    minCostArr[1] = minCost
  }

  return Math.min(...minCostArr)
}

// minCostClimbingStairs([10, 15, 20])
// minCostClimbingStairs([10, 15, 20, 25])
// minCostClimbingStairs([10, 15]) //?
// minCostClimbingStairs([10, 15, 20, 10]) //?
// minCostClimbingStairs([10, 20, 15, 10]) //?
// minCostClimbingStairs([5, 30, 10, 20, 15, 10])
// minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
