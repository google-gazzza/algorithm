// [Easy] 746. Min Cost Climbing Stairs
// 746_min_cost_climbing_stairs

// https://leetcode.com/problems/min-cost-climbing-stairs
// Runtime: 80 ms, faster than 91.21% of JavaScript online submissions for Min Cost Climbing Stairs.
// Memory Usage: 39.1 MB, less than 84.20% of JavaScript online submissions for Min Cost Climbing Stairs.

/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  const minCostArr = [cost[0], cost[1]]
  const costLen = cost.length
  if (costLen === 1) {
    return 0
  } else if (costLen === 2) {
    return Math.min(...minCostArr)
  }

  for (let i = 2; i < costLen; i += 1 || 0) {
    const minCost = cost[i] + Math.min(...minCostArr)
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
