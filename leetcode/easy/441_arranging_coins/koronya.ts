// [Easy] 441. Arranging Coins
// 441_arranging_coins

// https://leetcode.com/problems/arranging-coins
// Runtime: 124 ms, faster than 100.00% of TypeScript online submissions for Arranging Coins.
// Memory Usage: 40.6 MB, less than 33.33% of TypeScript online submissions for Arranging Coins.
const arrangeCoins = function (n: number): number {
  let result: number = 0
  let next: number = 1
  while (n > 0) {
    n -= next
    next += 1
    if (n >= 0) {
      result += 1
    }
  }

  return result
}
