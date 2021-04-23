// [Medium] 1833. Maximum Ice Cream Bars
// 1833_maximum_ice_cream_bars

// https://leetcode.com/problems/maximum-ice-cream-bars
// Runtime: 236 ms, faster than 65.05% of JavaScript online submissions for Maximum Ice Cream Bars.
// Memory Usage: 52.8 MB, less than 61.29% of JavaScript online submissions for Maximum Ice Cream Bars.

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = function (costs, coins) {
  const costsLen = costs.length
  let totalCosts = 0
  let totalNumbers = 0
  costs.sort((a, b) => a - b)
  for (let i = 0; i < costsLen; i += 1 || 0) {
    const cost = costs[i]
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
