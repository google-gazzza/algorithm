// [Easy] 605. Can Place Flowers
// 605_can_place_flowers

// https://leetcode.com/problems/can-place-flowers
// Runtime: 85 ms, faster than 73.96% of JavaScript online submissions for Can Place Flowers.
// Memory Usage: 44.4 MB, less than 10.29% of JavaScript online submissions for Can Place Flowers.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  const arrLen = flowerbed.length
  const getPrev = (index) => (index === 0 ? 0 : flowerbed[index - 1])
  const getNext = (index) => (index === arrLen - 1 ? 0 : flowerbed[index + 1])
  let count = 0
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const prev = getPrev(i)
    const now = flowerbed[i]
    const next = getNext(i)
    if (now !== 1 && prev !== 1 && next !== 1) {
      flowerbed[i] = 1
      count += 1
    }
  }

  return count >= n
}

canPlaceFlowers([1, 0, 0, 0, 1], 1)
canPlaceFlowers([1, 0, 0, 0, 1], 2)
