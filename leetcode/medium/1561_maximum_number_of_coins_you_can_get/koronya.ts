// [Medium] 1561. Maximum Number of Coins You Can Get
// 1561_maximum_number_of_coins_you_can_get

// https://leetcode.com/problems/maximum-number-of-coins-you-can-get
// Runtime: 216 ms, faster than 71.43% of TypeScript online submissions for Maximum Number of Coins You Can Get.
// Memory Usage: 49.8 MB, less than 100.00% of TypeScript online submissions for Maximum Number of Coins You Can Get.
function maxCoins (piles: number[]): number {
  piles.sort((a: number, b: number): number => b - a)
  const loop: number = piles.length / 3
  let result: number = 0
  for (let i: number = 0; i < loop; i += 1 || 0) {
    result += piles[2 * i + 1]
  }

  return result
}
