// [Medium] 475. Heaters
// 475_heaters

// https://leetcode.com/problems/heaters
// Runtime: 3007 ms, faster than 30.00% of TypeScript online submissions for Heaters.
// Memory Usage: 46.4 MB, less than 100.00% of TypeScript online submissions for Heaters.

function findRadius(houses: number[], heaters: number[]): number {
  let max = 0
  houses.forEach((item) => {
    const now = heaters.reduce((acc, cur) => (acc > Math.abs(cur - item) ? Math.abs(cur - item) : acc), Number.MAX_SAFE_INTEGER)
    max = Math.max(now, max)
  })
  return max
}
