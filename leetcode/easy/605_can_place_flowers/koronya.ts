// [Easy] 605. Can Place Flowers
// 605_can_place_flowers

// https://leetcode.com/problems/can-place-flowers
// Runtime: 99 ms, faster than 69.49% of TypeScript online submissions for Can Place Flowers.
// Memory Usage: 44.9 MB, less than 17.29% of TypeScript online submissions for Can Place Flowers.

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const arrLen = flowerbed.length
  const getPrev = (index: number): number => (index === 0 ? 0 : flowerbed[index - 1])
  const getNext = (index: number): number => (index === arrLen - 1 ? 0 : flowerbed[index + 1])
  let count: number = 0
  for (let i: number = 0; i < arrLen; i += 1) {
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
