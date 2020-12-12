// [Medium] 1561. Maximum Number of Coins You Can Get
// 1561_maximum_number_of_coins_you_can_get

// https://leetcode.com/problems/maximum-number-of-coins-you-can-get
// Runtime: 208 ms, faster than 79.55% of JavaScript online submissions for Maximum Number of Coins You Can Get.
// Memory Usage: 49.6 MB, less than 48.86% of JavaScript online submissions for Maximum Number of Coins You Can Get.
const maxCoins = function (piles) {
  piles.sort((a, b) => b - a)
  const loop = piles.length / 3
  let result = 0
  for (let i = 0; i < loop; i += 1 || 0) {
    result += piles[2 * i + 1]
  }

  return result
}
