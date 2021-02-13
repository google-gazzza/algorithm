// [Medium] 875. Koko Eating Bananas
// 875_koko_eating_bananas

// https://leetcode.com/problems/koko-eating-bananas
// Runtime: 2544 ms, faster than 5.52% of JavaScript online submissions for Koko Eating Bananas.
// Memory Usage: 41.9 MB, less than 84.14% of JavaScript online submissions for Koko Eating Bananas.

/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
const minEatingSpeed = function (piles, H) {
  const getTime = (n) => piles.reduce((acc, cur) => acc + Math.ceil(cur / n), 0)
  let count = 1
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
