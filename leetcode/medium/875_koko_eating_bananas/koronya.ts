// [Medium] 875. Koko Eating Bananas
// 875_koko_eating_bananas

// https://leetcode.com/problems/koko-eating-bananas
// Runtime: 2504 ms, faster than 28.57% of TypeScript online submissions for Koko Eating Bananas.
// Memory Usage: 42.2 MB, less than 100.00% of TypeScript online submissions for Koko Eating Bananas.

/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
function minEatingSpeed(piles: number[], H: number): number {
  const getTime = (n: number): number => piles.reduce((acc, cur) => acc + Math.ceil(cur / n), 0)
  let count: number = 1
  while (true) {
    const time = getTime(count)
    if (time <= H) {
      return count
    }
    count += 1
  }
}

minEatingSpeed([3, 6, 7, 11], 8) //?
minEatingSpeed([30, 11, 23, 4, 20], 5) //?
minEatingSpeed([30, 11, 23, 4, 20], 6) //?
