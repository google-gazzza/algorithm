// [Easy] 441. Arranging Coins
// 441_arranging_coins

// https://leetcode.com/problems/arranging-coins
// Runtime: 108 ms, faster than 71.13% of JavaScript online submissions for Arranging Coins.
// Memory Usage: 40.2 MB, less than 14.58% of JavaScript online submissions for Arranging Coins.
const arrangeCoins = function (n) {
  let result = 0
  let next = 1
  while (n > 0) {
    n -= next
    next += 1
    if (n >= 0) {
      result += 1
    }
  }

  return result
}
